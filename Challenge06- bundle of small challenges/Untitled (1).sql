CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY,
  "first_name" text NOT NULL,
  "last_name" text NOT NULL,
  "phone_number" text NOT NULL,
  "year_of_birth" int,
  "street_address" text,
  "city" text NOT NULL,
  "postal_code" text,
  "comments" text,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "address_id" int NOT NULL,
  "name" text NOT NULL,
  "since" text,
  "headquarters" text
);

CREATE TABLE "addresses" (
  "id" SERIAL PRIMARY KEY,
  "agency_id" int,
  "street_address" text NOT NULL,
  "street_number" text NOT NULL,
  "suite" int,
  "city" text NOT NULL,
  "county" text NOT NULL,
  "state" text NOT NULL,
  "postal_code" text NOT NULL
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "model_id" int NOT NULL,
  "color" text NOT NULL,
  "license_plate" text NOT NULL,
  "vin" text NOT NULL,
  "transmission_type" text NOT NULL,
  "status" text NOT NULL,
  "mileage" text NOT NULL
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "make" text NOT NULL,
  "model" text NOT NULL,
  "year" text NOT NULL,
  "size" text NOT NULL
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "agency_id" int NOT NULL,
  "customer_id" int NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "returning_date" timestamp NOT NULL
);

CREATE TABLE "car_order" (
  "id" SERIAL PRIMARY KEY,
  "order_id" int NOT NULL,
  "car_id" int NOT NULL
);

ALTER TABLE "addresses" ADD FOREIGN KEY ("id") REFERENCES "agencies" ("address_id");

ALTER TABLE "cars" ADD FOREIGN KEY ("model_id") REFERENCES "models" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id");

ALTER TABLE "car_order" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "car_order" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");
