create schema client_xyz;
SET search_path TO client_xyz;

create type card_type_enum as enum('amex', 'master', 'visa', 'discover', 'other');
create type payment_status_enum as enum ('success', 'error');
create type currency_enum as enum('usd','eur','aud');

CREATE TABLE if not exists client_xyz.payment (
	id serial NOT NULL,
	customer_id int4 NOT NULL,
	customer_fullname varchar NOT NULL,
	currency currency_enum NOT NULL,
	amount_paid int4 NOT NULL,
	cardholder_name varchar NOT NULL,
	card_type card_type_enum NOT NULL,
	card_number varchar NOT NULL,
	card_expiration date NOT NULL,
	cvv varchar NOT NULL,
	payment_date timestamp not null default current_timestamp,
	status payment_status_enum,
	reason_for_failure varchar,
	PRIMARY KEY (id)
);