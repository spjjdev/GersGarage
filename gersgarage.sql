--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

-- Started on 2020-08-15 18:02:48

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16595)
-- Name: booking; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.booking (
    booking_id bigint NOT NULL,
    timedate character varying(255),
    mechanic_id bigint,
    booking_type_id bigint,
    reg character varying(255)
);


ALTER TABLE public.booking OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16603)
-- Name: booking_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.booking_type (
    booking_type_id bigint NOT NULL,
    description character varying(255),
    price bigint,
    type character varying(255)
);


ALTER TABLE public.booking_type OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16611)
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    email character varying(255) NOT NULL,
    first_name character varying(255),
    last_name character varying(255),
    password character varying(255),
    phone_num character varying(255)
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16685)
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hibernate_sequence OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16619)
-- Name: invoice; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.invoice (
    invoice_id bigint NOT NULL,
    booking_id bigint
);


ALTER TABLE public.invoice OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16624)
-- Name: invoice_supplies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.invoice_supplies (
    invoice_id bigint NOT NULL,
    supplies_id bigint NOT NULL
);


ALTER TABLE public.invoice_supplies OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16629)
-- Name: mechanic; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mechanic (
    mechanic_id bigint NOT NULL,
    address character varying(255),
    email character varying(255),
    first_name character varying(255),
    last_name character varying(255),
    phone_num character varying(255)
);


ALTER TABLE public.mechanic OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16637)
-- Name: supplies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.supplies (
    supplies_id bigint NOT NULL,
    price bigint,
    quantity bigint,
    supplies_name character varying(255)
);


ALTER TABLE public.supplies OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16642)
-- Name: vehicle; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vehicle (
    reg character varying(255) NOT NULL,
    colour character varying(255),
    engine_type character varying(255),
    make character varying(255),
    model character varying(255),
    email character varying(255)
);


ALTER TABLE public.vehicle OWNER TO postgres;

--
-- TOC entry 2871 (class 0 OID 16595)
-- Dependencies: 202
-- Data for Name: booking; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.booking (booking_id, timedate, mechanic_id, booking_type_id, reg) FROM stdin;
67	10.00, 12/07/20	3	4	07-D-55555
\.


--
-- TOC entry 2872 (class 0 OID 16603)
-- Dependencies: 203
-- Data for Name: booking_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.booking_type (booking_type_id, description, price, type) FROM stdin;
1	Annual Service	100	Annual Service
2	Major Service	250	Major Service
3	Repair/Fault	150	Repair/Fault
4	Major Repair	500	Major Repair
\.


--
-- TOC entry 2873 (class 0 OID 16611)
-- Dependencies: 204
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer (email, first_name, last_name, password, phone_num) FROM stdin;
jane@doe.ie	Jane 	Doe	12345	0855566778
mary@potts.ie	Mary 	Potts	12345	0861234567
joe@bloggs.ie	Joe	Bloggs	54321	0865432101
\.


--
-- TOC entry 2874 (class 0 OID 16619)
-- Dependencies: 205
-- Data for Name: invoice; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.invoice (invoice_id, booking_id) FROM stdin;
\.


--
-- TOC entry 2875 (class 0 OID 16624)
-- Dependencies: 206
-- Data for Name: invoice_supplies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.invoice_supplies (invoice_id, supplies_id) FROM stdin;
\.


--
-- TOC entry 2876 (class 0 OID 16629)
-- Dependencies: 207
-- Data for Name: mechanic; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mechanic (mechanic_id, address, email, first_name, last_name, phone_num) FROM stdin;
1	05 Sunnyside Place	aeyckelberg0@zdnet.com	Alaster	Eyckelberg	707-840-7697
2	5 Cambridge Terrace	mweatherburn1@shareasale.com	Mildred	Weatherburn	498-949-4659
3	89 Wayridge Point	fkid2@gizmodo.com	Flory	Kid	237-133-4272
4	93 Mayfield Plaza	jlicciardo3@plala.or.jp	Janith	Licciardo	968-293-5540
5	7 Sunnyside Junction	dsabin4@java.com	Darrell	Sabin	490-397-4426
\.


--
-- TOC entry 2877 (class 0 OID 16637)
-- Dependencies: 208
-- Data for Name: supplies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.supplies (supplies_id, price, quantity, supplies_name) FROM stdin;
1	50	10	wheels
2	20	100	wiper blades
31	5	20	 Window Wash
35	10	10	 test
\.


--
-- TOC entry 2878 (class 0 OID 16642)
-- Dependencies: 209
-- Data for Name: vehicle; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vehicle (reg, colour, engine_type, make, model, email) FROM stdin;
07-D-55555	Black	Petrol	Nissan	Micra	jane@doe.ie
06-D-12345	Red	Petrol	Ford	Focus	mary@potts.ie
\.


--
-- TOC entry 2885 (class 0 OID 0)
-- Dependencies: 210
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hibernate_sequence', 67, true);


--
-- TOC entry 2721 (class 2606 OID 16602)
-- Name: booking booking_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.booking
    ADD CONSTRAINT booking_pkey PRIMARY KEY (booking_id);


--
-- TOC entry 2723 (class 2606 OID 16610)
-- Name: booking_type booking_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.booking_type
    ADD CONSTRAINT booking_type_pkey PRIMARY KEY (booking_type_id);


--
-- TOC entry 2725 (class 2606 OID 16618)
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (email);


--
-- TOC entry 2729 (class 2606 OID 16623)
-- Name: invoice invoice_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT invoice_pkey PRIMARY KEY (invoice_id);


--
-- TOC entry 2731 (class 2606 OID 16628)
-- Name: invoice_supplies invoice_supplies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice_supplies
    ADD CONSTRAINT invoice_supplies_pkey PRIMARY KEY (invoice_id, supplies_id);


--
-- TOC entry 2733 (class 2606 OID 16636)
-- Name: mechanic mechanic_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mechanic
    ADD CONSTRAINT mechanic_pkey PRIMARY KEY (mechanic_id);


--
-- TOC entry 2735 (class 2606 OID 16641)
-- Name: supplies supplies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supplies
    ADD CONSTRAINT supplies_pkey PRIMARY KEY (supplies_id);


--
-- TOC entry 2727 (class 2606 OID 16777)
-- Name: customer uk_nonbx33y5nkpeeohhjs6r18c0; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT uk_nonbx33y5nkpeeohhjs6r18c0 UNIQUE (email);


--
-- TOC entry 2737 (class 2606 OID 16649)
-- Name: vehicle vehicle_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehicle
    ADD CONSTRAINT vehicle_pkey PRIMARY KEY (reg);


--
-- TOC entry 2742 (class 2606 OID 16670)
-- Name: invoice_supplies fk1n6yn99prykjsf4eoeh2rm8q; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice_supplies
    ADD CONSTRAINT fk1n6yn99prykjsf4eoeh2rm8q FOREIGN KEY (supplies_id) REFERENCES public.supplies(supplies_id);


--
-- TOC entry 2741 (class 2606 OID 16665)
-- Name: invoice fk4jd6uuk7w0d72riyre2w14fl7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT fk4jd6uuk7w0d72riyre2w14fl7 FOREIGN KEY (booking_id) REFERENCES public.booking(booking_id);


--
-- TOC entry 2739 (class 2606 OID 16655)
-- Name: booking fk51vos7pwhsvoyt2jd6s783c0e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.booking
    ADD CONSTRAINT fk51vos7pwhsvoyt2jd6s783c0e FOREIGN KEY (booking_type_id) REFERENCES public.booking_type(booking_type_id);


--
-- TOC entry 2743 (class 2606 OID 16675)
-- Name: invoice_supplies fk644tujvote56tica2b9qmhiqw; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice_supplies
    ADD CONSTRAINT fk644tujvote56tica2b9qmhiqw FOREIGN KEY (invoice_id) REFERENCES public.invoice(invoice_id);


--
-- TOC entry 2738 (class 2606 OID 16650)
-- Name: booking fkivfeor9grutyd1mb210tdt9b8; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.booking
    ADD CONSTRAINT fkivfeor9grutyd1mb210tdt9b8 FOREIGN KEY (mechanic_id) REFERENCES public.mechanic(mechanic_id);


--
-- TOC entry 2744 (class 2606 OID 16781)
-- Name: vehicle fkqwoq5no52nm6jmrqt47c0m8ws; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehicle
    ADD CONSTRAINT fkqwoq5no52nm6jmrqt47c0m8ws FOREIGN KEY (email) REFERENCES public.customer(email) ON DELETE CASCADE;


--
-- TOC entry 2740 (class 2606 OID 16786)
-- Name: booking fkuatmal54ol2k4a3pn4c8c31w; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.booking
    ADD CONSTRAINT fkuatmal54ol2k4a3pn4c8c31w FOREIGN KEY (reg) REFERENCES public.vehicle(reg) ON DELETE CASCADE;


-- Completed on 2020-08-15 18:02:49

--
-- PostgreSQL database dump complete
--

