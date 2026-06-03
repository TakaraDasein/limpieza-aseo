require('dotenv').config({ path: require('path').resolve(__dirname, '..', '.env') });

const { createClient } = require('@libsql/client');

const client = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

const exactNameMap = new Map([
  ['algodòn', 'Algodón'],
  ['ambientador liquido', 'Ambientador Líquido'],
  ['ambientador líquido', 'Ambientador Líquido'],
  ['baldes trapeadores con escurridor', 'Balde para Trapero con Escurridor'],
  ['bow detergente', 'Detergente Bow'],
  ['crema + cepillo', 'Kit Crema Dental + Cepillo'],
  ['detergente liquido para ropa', 'Detergente Líquido para Ropa'],
  ['detergente en polvo multiusos', 'Detergente en Polvo Multiusos'],
  ['detergente ropa oscura', 'Detergente para Ropa Oscura'],
  ['dipensador', 'Dispensador'],
  ['dispensador', 'Dispensador'],
  ['dispensador de jabon', 'Dispensador de Jabón'],
  ['dispensador de jabón', 'Dispensador de Jabón'],
  ['familia expert', 'Papel Higiénico Familia Expert'],
  ['fluo cardent', 'Fluocardent'],
  ['gel antibacterial', 'Gel Antibacterial'],
  ['jabon liquido antibacterial', 'Jabón Líquido Antibacterial'],
  ['jabón líquido antibacterial', 'Jabón Líquido Antibacterial'],
  ['jabon rey', 'Jabón Rey'],
  ['jabòn rey', 'Jabón Rey'],
  ['limpiavidrios', 'Limpia Vidrios'],
  ['limpia polvo', 'Limpia Polvo'],
  ['pack 4 familia megarollo', 'Pack Familia Megarollo x4'],
  ['pack papel nova', 'Pack Papel Nova'],
  ['pack rosal', 'Pack Rosal'],
  ['palos', 'Palos para Escoba y Trapero'],
  ['palos ', 'Palos para Escoba y Trapero'],
  ['papel higenico familia', 'Papel Higiénico Familia'],
  ['papel higiénico familia', 'Papel Higiénico Familia'],
  ['shampoo para autos', 'Shampoo para Autos'],
  ['suavitel', 'Suavitel'],
  ['suavizante', 'Suavizante para Ropa'],
  ['tuallas de cocina', 'Toallas de Cocina'],
  ['unico', 'Único'],
  ['único', 'Único'],
  ['bonaire', 'Bonaire'],
  ['aromax', 'AromaX'],
  ['n/a', 'N/A'],
  ['alcohol', 'Alcohol de Limpieza'],
  ['escoba', 'Escoba Multiusos'],
  ['patojito', 'Limpiador Patojito'],
  ['protex', 'Jabón Protex'],
  ['pastiblue', 'Pastiblue para Baño'],
]);

const uppercaseWords = ['TR', 'DR', 'WM', 'N/A', 'PowerD', 'AromaX', 'Yzuax'];

function titleCase(text) {
  return String(text)
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      const keepUpper = uppercaseWords.find((item) => item.toLowerCase() === word);
      return keepUpper || word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

function normalizeName(name) {
  const raw = String(name || '').trim().replace(/\s+/g, ' ');
  const key = raw.toLowerCase();

  if (exactNameMap.has(key)) {
    return exactNameMap.get(key);
  }

  return titleCase(raw)
    .replace(/\bLiquido\b/g, 'Líquido')
    .replace(/\bJabon\b/g, 'Jabón')
    .replace(/\bHigenico\b/g, 'Higiénico')
    .replace(/\bDomesticos\b/g, 'Domésticos')
    .replace(/\bAntibacterial\b/g, 'Antibacterial');
}

function hasUsableDescription(description) {
  const value = String(description || '').trim();
  if (!value) return false;
  if (value.length < 24) return false;
  if (value.includes('�')) return false;
  return true;
}

function buildDescription(row, name) {
  const text = String(name || '').toLowerCase();
  const category = String(row.category_id || '');

  if (text.includes('alcohol')) return 'Alcohol de limpieza ideal para desinfectar superficies y apoyar rutinas de higiene en el hogar o negocio.';
  if (text.includes('ambientador') || text.includes('aromax')) return 'Ambientador líquido que ayuda a perfumar los espacios y dejar una sensación de frescura duradera.';
  if (text.includes('blanqueador')) return 'Blanqueador ideal para apoyar la limpieza, desinfección y remoción de manchas en superficies y ropa lavable.';
  if (text.includes('detergente') && text.includes('ropa oscura')) return 'Detergente formulado para prendas oscuras, ideal para limpiar sin maltratar el color de las telas.';
  if (text.includes('detergente') && text.includes('líquido') && text.includes('ropa')) return 'Detergente líquido para ropa con buen poder de limpieza y excelente rendimiento en cada lavado.';
  if (text.includes('detergente') && text.includes('polvo')) return 'Detergente en polvo multiusos ideal para el lavado de ropa y la limpieza general del hogar o negocio.';
  if (text.includes('detergente')) return 'Detergente con buen poder de limpieza, ideal para el lavado diario y diferentes rutinas de aseo.';
  if (text.includes('gel antibacterial')) return 'Gel antibacterial de rápida absorción, ideal para la higiene frecuente de manos sin necesidad de enjuague.';
  if (text.includes('jabon liquido antibacterial') || text.includes('jabón líquido antibacterial')) return 'Jabón líquido antibacterial ideal para la higiene frecuente de manos en hogar, oficina o negocio.';
  if (text.includes('jabon liquido') || text.includes('jabón líquido')) return 'Jabón líquido de uso diario, ideal para una limpieza práctica y efectiva en diferentes espacios.';
  if (text.includes('jabon rey') || text.includes('jabón rey')) return 'Jabón tradicional de alto rendimiento, útil para labores de lavado y limpieza general.';
  if (text.includes('protex')) return 'Jabón de uso personal ideal para la higiene diaria, con limpieza efectiva y agradable sensación al usarlo.';
  if (text.includes('limpia vidrios')) return 'Limpiador para vidrios y espejos que ayuda a remover suciedad y dejar un acabado más limpio y brillante.';
  if (text.includes('limpia polvo')) return 'Producto ideal para retirar polvo fino y apoyar la limpieza frecuente de muebles, repisas y otras superficies.';
  if (text.includes('multiusos')) return 'Limpiador multiusos ideal para la limpieza diaria de muebles, baños, cocinas y otras superficies lavables.';
  if (text.includes('llantil')) return 'Producto ideal para apoyar la limpieza y el cuidado de llantas con una presentación práctica y rendidora.';
  if (text.includes('pastiblue')) return 'Pastilla sanitaria para baño que ayuda a mantener limpieza, fragancia y sensación de frescura.';
  if (text.includes('shampoo para autos')) return 'Shampoo para autos ideal para remover suciedad sin maltratar la pintura ni dejar residuos visibles.';
  if (text.includes('suavitel') || text.includes('suavizante')) return 'Suavizante para ropa que ayuda a dejar las prendas con tacto suave y fragancia agradable.';
  if (text.includes('ropa color')) return 'Producto ideal para el cuidado y lavado de prendas de color, pensado para apoyar la limpieza diaria.';
  if (text.includes('papel higienico') || text.includes('papel higiénico')) return 'Papel higiénico de uso diario pensado para brindar suavidad, rendimiento y practicidad.';
  if (text.includes('toallas de cocina')) return 'Toallas de cocina absorbentes y prácticas para apoyar la limpieza diaria y el secado rápido.';
  if (text.includes('guantes')) return 'Guantes prácticos y resistentes para apoyar labores de limpieza, manipulación y cuidado de las manos.';
  if (text.includes('dispensador de jabon') || text.includes('dispensador de jabón')) return 'Dispensador práctico para jabón, ideal para mejorar la higiene y el orden en baños o zonas de lavado.';
  if (text.includes('dispensador')) return 'Dispensador funcional y resistente, ideal para mejorar el orden y la practicidad en espacios de uso frecuente.';
  if (text.includes('balde') || text.includes('escurridor')) return 'Balde con escurridor ideal para facilitar la limpieza de pisos y mejorar el rendimiento del trapero.';
  if (text.includes('delantal')) return 'Delantal práctico para proteger la ropa durante labores de aseo, cocina o atención al público.';
  if (text.includes('algodon') || text.includes('algodón')) return 'Algodón multiusos ideal para higiene, cuidado personal y tareas de limpieza ligera.';
  if (text.includes('palos')) return 'Palos resistentes compatibles con distintos implementos de limpieza para uso diario en hogar o negocio.';
  if (text.includes('cepillo') && text.includes('crema')) return 'Kit práctico de higiene oral, ideal para uso personal, dotación o venta por unidad.';
  if (text.includes('familia') || text.includes('pack') || text.includes('nova') || text.includes('rosal')) return 'Presentación práctica para el hogar o negocio, pensada para ofrecer rendimiento y conveniencia en el uso diario.';
  if (text.includes('condones')) return 'Presentación en sets lista para dispensación, práctica para negocios, puntos de venta o dotación.';

  if (category === 'jabones') return 'Producto de limpieza ideal para el uso diario, pensado para apoyar distintas rutinas de aseo en hogar o negocio.';
  if (category === 'varios') return 'Producto complementario para el hogar o negocio, práctico para apoyar tareas de higiene, orden o limpieza.';
  if (category === 'cepillos') return 'Implemento práctico para apoyar labores de limpieza puntual con buen agarre y uso cómodo.';
  if (category === 'escobas') return 'Producto de limpieza diseñado para brindar un barrido eficiente y práctico en diferentes espacios.';
  if (category === 'esponjas') return 'Producto práctico para apoyar labores de limpieza, lavado y mantenimiento en distintas superficies.';
  if (category === 'traperos') return 'Trapero funcional y resistente, ideal para la limpieza diaria de pisos en hogar o negocio.';

  return 'Producto práctico para uso diario, ideal para apoyar tareas de limpieza, higiene o mantenimiento.';
}

async function main() {
  const result = await client.execute('select id, sku, name, description, category_id from products');
  let updated = 0;

  for (const row of result.rows) {
    const nextName = normalizeName(row.name);
    const nextDescription = hasUsableDescription(row.description)
      ? String(row.description).trim()
      : buildDescription(row, nextName);

    const currentName = String(row.name || '').trim();
    const currentDescription = String(row.description || '').trim();

    if (currentName === nextName && currentDescription === nextDescription) {
      continue;
    }

    await client.execute({
      sql: 'update products set name = ?, description = ?, updated_at = unixepoch() where id = ?',
      args: [nextName, nextDescription, row.id],
    });

    updated += 1;
    console.log(`Updated ${row.sku}: ${currentName} -> ${nextName}`);
  }

  console.log(`Total updated: ${updated}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
