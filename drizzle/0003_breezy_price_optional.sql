CREATE TABLE `__new_products` (
	`id` text PRIMARY KEY NOT NULL,
	`sku` text NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`category_id` text,
	`price` integer,
	`image` text,
	`variants` text,
	`active` integer DEFAULT true,
	`order` integer DEFAULT 0,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	`images` text,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_products`(`id`, `sku`, `name`, `description`, `category_id`, `price`, `image`, `variants`, `active`, `order`, `created_at`, `updated_at`, `images`)
SELECT `id`, `sku`, `name`, `description`, `category_id`, `price`, `image`, `variants`, `active`, `order`, `created_at`, `updated_at`, `images` FROM `products`;
--> statement-breakpoint
DROP TABLE `products`;
--> statement-breakpoint
ALTER TABLE `__new_products` RENAME TO `products`;
--> statement-breakpoint
CREATE UNIQUE INDEX `products_sku_unique` ON `products` (`sku`);
