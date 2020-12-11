--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

-- Started on 2020-11-22 11:50:21

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
-- TOC entry 202 (class 1259 OID 18484)
-- Name: bac_si; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bac_si (
    id_bac_si smallint NOT NULL,
    id_nguoi_dung smallint,
    ma_bac_si character varying(255),
    id_chuyen_khoa smallint,
    id_trinh_do smallint,
    id_noi_cong_tac smallint
);


ALTER TABLE public.bac_si OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 18487)
-- Name: bac_si_id_bac_si_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.bac_si ALTER COLUMN id_bac_si ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.bac_si_id_bac_si_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 204 (class 1259 OID 18489)
-- Name: bang_gia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bang_gia (
    id_bang_gia smallint NOT NULL,
    ten_bang_gia character varying(255),
    ngay_bat_dau date,
    ngay_ket_thuc date,
    trang_thai boolean,
    ap_dung_he_thong boolean,
    ap_dung_nguoi_tao boolean,
    ap_dung_khach_hang boolean,
    chon_hang_hoa smallint,
    loai_khau_hao smallint,
    gia_tri_khau_hao real,
    gia_ban_dau smallint,
    lam_tron boolean
);


ALTER TABLE public.bang_gia OWNER TO postgres;

--
-- TOC entry 3203 (class 0 OID 0)
-- Dependencies: 204
-- Name: COLUMN bang_gia.ngay_bat_dau; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.bang_gia.ngay_bat_dau IS 'hieu luc';


--
-- TOC entry 3204 (class 0 OID 0)
-- Dependencies: 204
-- Name: COLUMN bang_gia.ngay_ket_thuc; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.bang_gia.ngay_ket_thuc IS 'hieu luc';


--
-- TOC entry 3205 (class 0 OID 0)
-- Dependencies: 204
-- Name: COLUMN bang_gia.trang_thai; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.bang_gia.trang_thai IS '1 ap dung, 0 k ap dung';


--
-- TOC entry 3206 (class 0 OID 0)
-- Dependencies: 204
-- Name: COLUMN bang_gia.ap_dung_he_thong; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.bang_gia.ap_dung_he_thong IS '1 co, 0  khong';


--
-- TOC entry 3207 (class 0 OID 0)
-- Dependencies: 204
-- Name: COLUMN bang_gia.ap_dung_nguoi_tao; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.bang_gia.ap_dung_nguoi_tao IS '1 co, 0 khong';


--
-- TOC entry 3208 (class 0 OID 0)
-- Dependencies: 204
-- Name: COLUMN bang_gia.ap_dung_khach_hang; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.bang_gia.ap_dung_khach_hang IS '1 co, 0 khong';


--
-- TOC entry 3209 (class 0 OID 0)
-- Dependencies: 204
-- Name: COLUMN bang_gia.chon_hang_hoa; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.bang_gia.chon_hang_hoa IS '1 khac bang gia, 2 khac bang gia kem canh bao, 3 khong cho phep';


--
-- TOC entry 3210 (class 0 OID 0)
-- Dependencies: 204
-- Name: COLUMN bang_gia.loai_khau_hao; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.bang_gia.loai_khau_hao IS '1 la vnd, 0 la %';


--
-- TOC entry 205 (class 1259 OID 18492)
-- Name: bang_gia_id_bang_gia_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.bang_gia ALTER COLUMN id_bang_gia ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.bang_gia_id_bang_gia_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 206 (class 1259 OID 18494)
-- Name: chi_nhanh; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chi_nhanh (
    id_chi_nhanh smallint NOT NULL,
    ten_chi_nhanh character varying(255),
    dia_chi character varying(255),
    so_dien_thoai character varying(15),
    mac_dinh boolean,
    chi_nhanh_cha smallint,
    duong_dan_logo character varying(255)
);


ALTER TABLE public.chi_nhanh OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 18500)
-- Name: chi_nhanh_id_chi_nhanh_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.chi_nhanh ALTER COLUMN id_chi_nhanh ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.chi_nhanh_id_chi_nhanh_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 208 (class 1259 OID 18502)
-- Name: chuc_danh; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chuc_danh (
    id_chuc_danh smallint NOT NULL,
    ten_chuc_danh character varying(255),
    mo_ta character varying(255),
    trang_thai boolean
);


ALTER TABLE public.chuc_danh OWNER TO postgres;

--
-- TOC entry 3211 (class 0 OID 0)
-- Dependencies: 208
-- Name: COLUMN chuc_danh.trang_thai; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.chuc_danh.trang_thai IS '1-hoatdong, 0-khonghoatdong';


--
-- TOC entry 209 (class 1259 OID 18508)
-- Name: chuc_danh_id_chuc_danh_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.chuc_danh ALTER COLUMN id_chuc_danh ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.chuc_danh_id_chuc_danh_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 210 (class 1259 OID 18510)
-- Name: chuyen_khoa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chuyen_khoa (
    id_chuyen_khoa smallint NOT NULL,
    ten_chuyen_khoa character varying(255)
);


ALTER TABLE public.chuyen_khoa OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 18513)
-- Name: chuyen_khoa_id_chuyen_khoa_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.chuyen_khoa ALTER COLUMN id_chuyen_khoa ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.chuyen_khoa_id_chuyen_khoa_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 212 (class 1259 OID 18515)
-- Name: dat_hang; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dat_hang (
    id_dat_hang smallint NOT NULL,
    ma_dat_hang character varying(255),
    ghi_chu character varying(255),
    id_chi_nhanh smallint,
    trang_thai character varying(50),
    id_khach_hang smallint,
    id_nguoi_ban smallint,
    id_nguoi_tao smallint,
    id_kenh_ban smallint,
    id_bang_gia smallint,
    tien_khach_da_tra real,
    tong_tien_hang real,
    giam_gia real,
    cach_giam_gia character varying(50)
);


ALTER TABLE public.dat_hang OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 18521)
-- Name: dat_hang_chi_tiet; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dat_hang_chi_tiet (
    id_dat_hang_chi_tiet integer NOT NULL,
    id_dat_hang integer,
    ma_hang_hoa character varying(255),
    ten_hang_hoa character varying(255),
    so_luong real,
    don_vi character varying(255),
    don_gia real,
    loai_giam_gia character varying(255),
    gia_tri_giam_gia real,
    tong_tien real
);


ALTER TABLE public.dat_hang_chi_tiet OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 18527)
-- Name: dat_hang_chi_tiet_id_dat_hang_chi_tiet_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.dat_hang_chi_tiet ALTER COLUMN id_dat_hang_chi_tiet ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.dat_hang_chi_tiet_id_dat_hang_chi_tiet_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 215 (class 1259 OID 18529)
-- Name: dat_hang_id_dat_hang_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.dat_hang ALTER COLUMN id_dat_hang ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.dat_hang_id_dat_hang_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 216 (class 1259 OID 18531)
-- Name: doi_tac_giao_hang; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doi_tac_giao_hang (
    id_doi_tac_giao_hang smallint NOT NULL,
    id_nguoi_dung smallint,
    ma_doi_tac_giao_hang character varying(255),
    id_nhom_doi_tac_giao_hang smallint
);


ALTER TABLE public.doi_tac_giao_hang OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 18534)
-- Name: doi_tac_giao_hang_id_doi_tac_giao_hang_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.doi_tac_giao_hang ALTER COLUMN id_doi_tac_giao_hang ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.doi_tac_giao_hang_id_doi_tac_giao_hang_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 218 (class 1259 OID 18536)
-- Name: don_thuoc; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.don_thuoc (
    id_don_thuoc smallint NOT NULL,
    ma_don_thuoc character varying(255),
    ten_don_thuoc character varying(400),
    trang_thai boolean,
    ghi_chu character varying(400),
    created_by integer
);


ALTER TABLE public.don_thuoc OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 18542)
-- Name: don_thuoc_id_don_thuoc_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.don_thuoc ALTER COLUMN id_don_thuoc ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.don_thuoc_id_don_thuoc_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 220 (class 1259 OID 18544)
-- Name: don_thuoc_mau; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.don_thuoc_mau (
    id_don_thuoc smallint NOT NULL,
    ma_don_thuoc character varying(255),
    ten_don_thuoc character varying(255),
    trang_thai character varying(50),
    ghi_chu character varying(255),
    created_by smallint,
    created_date date
);


ALTER TABLE public.don_thuoc_mau OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 18550)
-- Name: don_thuoc_mau_id_don_thuoc_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.don_thuoc_mau ALTER COLUMN id_don_thuoc ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.don_thuoc_mau_id_don_thuoc_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 18552)
-- Name: don_vi; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.don_vi (
    id_don_vi smallint NOT NULL,
    ten_don_vi character varying(255),
    created_by integer,
    created_date date
);


ALTER TABLE public.don_vi OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 18555)
-- Name: don_vi_id_don_vi_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.don_vi ALTER COLUMN id_don_vi ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.don_vi_id_don_vi_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 224 (class 1259 OID 18557)
-- Name: hang_hoa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hang_hoa (
    id_hang_hoa smallint NOT NULL,
    ma_hang_hoa character varying(255),
    ma_vach character varying(255),
    ten_hang_hoa character varying(255),
    id_nhom_hang_hoa smallint,
    id_hang_san_xuat smallint,
    id_nuoc_san_xuat smallint,
    gia_von real,
    gia_ban real,
    ton_kho real,
    trong_luong real,
    quy_cach_dong_goi character varying(255),
    id_don_vi smallint,
    dinh_muc_ton_it_nhat real,
    dinh_muc_ton_cao_nhat real,
    mo_ta character varying(600),
    trang_thai_ban_truc_tiep boolean,
    trang_thai_lo_date boolean,
    so_luong_khach_dat_hang smallint,
    so_luong_hang_dat smallint
);


ALTER TABLE public.hang_hoa OWNER TO postgres;

--
-- TOC entry 3212 (class 0 OID 0)
-- Dependencies: 224
-- Name: COLUMN hang_hoa.gia_ban; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.hang_hoa.gia_ban IS 'gia ban co ban';


--
-- TOC entry 3213 (class 0 OID 0)
-- Dependencies: 224
-- Name: COLUMN hang_hoa.id_don_vi; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.hang_hoa.id_don_vi IS 'don vi co ban';


--
-- TOC entry 3214 (class 0 OID 0)
-- Dependencies: 224
-- Name: COLUMN hang_hoa.trang_thai_ban_truc_tiep; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.hang_hoa.trang_thai_ban_truc_tiep IS 'trang thai view truc tiep khi ban';


--
-- TOC entry 3215 (class 0 OID 0)
-- Dependencies: 224
-- Name: COLUMN hang_hoa.trang_thai_lo_date; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.hang_hoa.trang_thai_lo_date IS 'trang thai cho phep nhap lo date';


--
-- TOC entry 225 (class 1259 OID 18563)
-- Name: hang_hoa_id_hang_hoa_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.hang_hoa ALTER COLUMN id_hang_hoa ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.hang_hoa_id_hang_hoa_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 226 (class 1259 OID 18565)
-- Name: hang_san_xuat; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hang_san_xuat (
    id_hang_san_xuat integer NOT NULL,
    ten_hang_san_xuat character varying(255)
);


ALTER TABLE public.hang_san_xuat OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 18568)
-- Name: hang_san_xuat_id_hang_san_xuat_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.hang_san_xuat ALTER COLUMN id_hang_san_xuat ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.hang_san_xuat_id_hang_san_xuat_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 228 (class 1259 OID 18570)
-- Name: hoa_don; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hoa_don (
    id_hoa_don smallint NOT NULL,
    ma_hoa_don character varying(255),
    ghi_chu character varying(255),
    id_chi_nhanh smallint,
    thoi_gian_tao date,
    trang_thai character varying(50),
    id_khach_hang smallint,
    id_nguoi_ban smallint,
    id_nguoi_tao smallint,
    id_kenh_ban smallint,
    id_bang_gia smallint,
    ban_theo_don boolean,
    tien_khach_da_tra real,
    tong_tien_hang real,
    giam_gia real,
    cach_giam_gia character varying(50)
);


ALTER TABLE public.hoa_don OWNER TO postgres;

--
-- TOC entry 3216 (class 0 OID 0)
-- Dependencies: 228
-- Name: COLUMN hoa_don.id_nguoi_ban; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.hoa_don.id_nguoi_ban IS 'id nhan vien';


--
-- TOC entry 3217 (class 0 OID 0)
-- Dependencies: 228
-- Name: COLUMN hoa_don.id_nguoi_tao; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.hoa_don.id_nguoi_tao IS 'id nhan vien';


--
-- TOC entry 229 (class 1259 OID 18576)
-- Name: hoa_don_id_hoa_don_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.hoa_don ALTER COLUMN id_hoa_don ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.hoa_don_id_hoa_don_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 230 (class 1259 OID 18578)
-- Name: kenh_ban; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.kenh_ban (
    id_kenh_ban smallint NOT NULL,
    ten_kenh_ban character varying(255),
    mo_ta character varying(255),
    created_date date,
    created_by smallint
);


ALTER TABLE public.kenh_ban OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 18584)
-- Name: kenh_ban_id_kenh_ban_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.kenh_ban ALTER COLUMN id_kenh_ban ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.kenh_ban_id_kenh_ban_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 232 (class 1259 OID 18586)
-- Name: khach_hang; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.khach_hang (
    id_khach_hang smallint NOT NULL,
    id_nguoi_dung smallint,
    ma_khach_hang character varying(255),
    id_nhom_khach_hang smallint,
    id_chi_nhanh smallint,
    ma_so_thue character varying(255),
    facebook character varying(255),
    loai_khach_hang smallint,
    ten_cong_ty character varying(255)
);


ALTER TABLE public.khach_hang OWNER TO postgres;

--
-- TOC entry 3218 (class 0 OID 0)
-- Dependencies: 232
-- Name: COLUMN khach_hang.loai_khach_hang; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.khach_hang.loai_khach_hang IS '1-canhan, 2-congty';


--
-- TOC entry 233 (class 1259 OID 18592)
-- Name: khach_hang_id_khach_hang_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.khach_hang ALTER COLUMN id_khach_hang ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.khach_hang_id_khach_hang_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 234 (class 1259 OID 18594)
-- Name: kho_hang; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.kho_hang (
    id integer NOT NULL,
    ten character varying(255),
    ma_kho character varying(255),
    dia_chi character varying(255),
    ghi_chu character varying(255),
    id_chi_nhanh smallint,
    id_nguoi_phu_trach smallint,
    dien_thoai smallint,
    trang_thai smallint
);


ALTER TABLE public.kho_hang OWNER TO postgres;

--
-- TOC entry 3219 (class 0 OID 0)
-- Dependencies: 234
-- Name: COLUMN kho_hang.trang_thai; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.kho_hang.trang_thai IS '1: mac dinh; #1: khong mac dinh';


--
-- TOC entry 235 (class 1259 OID 18600)
-- Name: kho_hang_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.kho_hang ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.kho_hang_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 236 (class 1259 OID 18602)
-- Name: khu_vuc; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.khu_vuc (
    id_khu_vuc smallint NOT NULL,
    ten_khu_vuc character varying(255),
    ten_khu_vuc_khong_dau character varying(255)
);


ALTER TABLE public.khu_vuc OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 18608)
-- Name: khu_vuc_id_khu_vuc_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.khu_vuc ALTER COLUMN id_khu_vuc ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.khu_vuc_id_khu_vuc_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 238 (class 1259 OID 18610)
-- Name: lo_hang; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lo_hang (
    id_lo_hang smallint NOT NULL,
    ten_lo_hang character varying(255),
    id_hang_hoa smallint,
    so_luong smallint,
    id_nguoi_tao smallint,
    ngay_tao date,
    ngay_cap_nhat date,
    han_su_dung date,
    trang_thai smallint,
    so_luong_luu_tam smallint,
    so_luong_khach_dat smallint,
    id_kho_hang smallint,
    is_lo smallint
);


ALTER TABLE public.lo_hang OWNER TO postgres;

--
-- TOC entry 3220 (class 0 OID 0)
-- Dependencies: 238
-- Name: COLUMN lo_hang.trang_thai; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.lo_hang.trang_thai IS '0:luu tam, 1: thanh cong';


--
-- TOC entry 239 (class 1259 OID 18613)
-- Name: lo_hang_id_lo_hang_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.lo_hang ALTER COLUMN id_lo_hang ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.lo_hang_id_lo_hang_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 240 (class 1259 OID 18615)
-- Name: nguoi_dung; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nguoi_dung (
    id_nguoi_dung smallint NOT NULL,
    ten_nguoi_dung character varying(100),
    ngay_sinh date,
    loai_nguoi_dung smallint,
    so_dien_thoai character varying(15),
    email character varying(25),
    dia_chi character varying(255),
    id_khu_vuc smallint,
    id_phuong_xa smallint,
    is_admin boolean,
    gioi_tinh boolean,
    trang_thai boolean,
    ghi_chu character varying(255),
    duong_dan_logo character varying(255),
    ten_dang_nhap character varying(255),
    mat_khau character varying(255)
);


ALTER TABLE public.nguoi_dung OWNER TO postgres;

--
-- TOC entry 3221 (class 0 OID 0)
-- Dependencies: 240
-- Name: COLUMN nguoi_dung.loai_nguoi_dung; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.nguoi_dung.loai_nguoi_dung IS '1-nhanvien, 2-bacsi, 3-khachang, 4-nhacungcap, 5-doitacgiaohang';


--
-- TOC entry 3222 (class 0 OID 0)
-- Dependencies: 240
-- Name: COLUMN nguoi_dung.id_khu_vuc; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.nguoi_dung.id_khu_vuc IS 'tinh/thanhpho-quan/huyen';


--
-- TOC entry 3223 (class 0 OID 0)
-- Dependencies: 240
-- Name: COLUMN nguoi_dung.is_admin; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.nguoi_dung.is_admin IS '1-admin, 0-khong admin';


--
-- TOC entry 3224 (class 0 OID 0)
-- Dependencies: 240
-- Name: COLUMN nguoi_dung.gioi_tinh; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.nguoi_dung.gioi_tinh IS '1-nam,0-nu';


--
-- TOC entry 3225 (class 0 OID 0)
-- Dependencies: 240
-- Name: COLUMN nguoi_dung.trang_thai; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.nguoi_dung.trang_thai IS '1-hoatdong, 0-khonghoatdong';


--
-- TOC entry 241 (class 1259 OID 18621)
-- Name: nguoi_dung_id_nguoi_dung_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.nguoi_dung ALTER COLUMN id_nguoi_dung ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.nguoi_dung_id_nguoi_dung_seq
    START WITH 2
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 242 (class 1259 OID 18623)
-- Name: nha_cung_cap; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nha_cung_cap (
    id integer NOT NULL,
    ma_nha_cung_cap character varying(255),
    ma_so_thue character varying(255),
    ten character varying(255),
    email character varying(255),
    dia_chi character varying(255),
    cong_ty character varying(255),
    ghi_chu character varying(255),
    dien_thoai integer,
    no integer,
    tong_mua integer,
    id_nhom_nha_cung_cap integer
);


ALTER TABLE public.nha_cung_cap OWNER TO postgres;

--
-- TOC entry 243 (class 1259 OID 18629)
-- Name: nha_cung_cap_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.nha_cung_cap ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.nha_cung_cap_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 244 (class 1259 OID 18631)
-- Name: nhan_vien; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nhan_vien (
    id_nhan_vien smallint NOT NULL,
    id_nguoi_dung smallint,
    ma_nhan_vien character varying(255),
    so_cmtnd character varying(255),
    id_phong_ban smallint,
    id_chuc_danh smallint,
    id_chi_nhanh smallint,
    facebook character varying(255)
);


ALTER TABLE public.nhan_vien OWNER TO postgres;

--
-- TOC entry 245 (class 1259 OID 18637)
-- Name: nhan_vien_id_nhan_vien_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.nhan_vien ALTER COLUMN id_nhan_vien ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.nhan_vien_id_nhan_vien_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 246 (class 1259 OID 18639)
-- Name: nhap_hang; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nhap_hang (
    id_nhap_hang smallint NOT NULL,
    ma_nhap_hang character varying(255),
    ghi_chu character varying(255),
    id_chi_nhanh smallint,
    trang_thai smallint,
    id_nha_cung_cap smallint,
    id_nguoi_tao smallint,
    tong_tien_hang real,
    giam_gia real,
    cach_giam_gia character varying(50),
    tien_da_tra_nha_cung_cap real
);


ALTER TABLE public.nhap_hang OWNER TO postgres;

--
-- TOC entry 247 (class 1259 OID 18645)
-- Name: nhap_hang_id_nhap_hang_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.nhap_hang ALTER COLUMN id_nhap_hang ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.nhap_hang_id_nhap_hang_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 248 (class 1259 OID 18647)
-- Name: nhom_doi_tac_giao_hang; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nhom_doi_tac_giao_hang (
    id_nhom_doi_tac_giao_hang smallint NOT NULL,
    ten_nhom_doi_tac_giao_hang character varying(255),
    ghi_chu character varying(255)
);


ALTER TABLE public.nhom_doi_tac_giao_hang OWNER TO postgres;

--
-- TOC entry 249 (class 1259 OID 18653)
-- Name: nhom_doi_tac_giao_hang_id_nhom_doi_tac_giao_hang_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.nhom_doi_tac_giao_hang ALTER COLUMN id_nhom_doi_tac_giao_hang ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.nhom_doi_tac_giao_hang_id_nhom_doi_tac_giao_hang_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 250 (class 1259 OID 18655)
-- Name: nhom_hang_hoa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nhom_hang_hoa (
    id_nhom_hang_hoa integer NOT NULL,
    ten_nhom_hang_hoa character varying(255),
    parent_id integer,
    created_by integer,
    created_date date,
    trang_thai_hoat_dong boolean,
    ghi_chu character varying(255)
);


ALTER TABLE public.nhom_hang_hoa OWNER TO postgres;

--
-- TOC entry 251 (class 1259 OID 18661)
-- Name: nhom_hang_hoa_id_nhom_hang_hoa_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.nhom_hang_hoa ALTER COLUMN id_nhom_hang_hoa ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.nhom_hang_hoa_id_nhom_hang_hoa_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 252 (class 1259 OID 18663)
-- Name: nhom_nha_cung_cap; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nhom_nha_cung_cap (
    "id_nhom_nha_cung_Cap" integer NOT NULL,
    ten_nhom_nha_cung_cap character varying(255),
    ghi_chu character varying(255)
);


ALTER TABLE public.nhom_nha_cung_cap OWNER TO postgres;

--
-- TOC entry 253 (class 1259 OID 18669)
-- Name: nhom_nha_cung_cap_id_nhom_nha_cung_Cap_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.nhom_nha_cung_cap ALTER COLUMN "id_nhom_nha_cung_Cap" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."nhom_nha_cung_cap_id_nhom_nha_cung_Cap_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 254 (class 1259 OID 18671)
-- Name: noi_cong_tac; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.noi_cong_tac (
    id_noi_cong_tac smallint NOT NULL,
    ten_noi_cong_tac character varying(255)
);


ALTER TABLE public.noi_cong_tac OWNER TO postgres;

--
-- TOC entry 255 (class 1259 OID 18674)
-- Name: noi_cong_tac_id_noi_cong_tac_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.noi_cong_tac ALTER COLUMN id_noi_cong_tac ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.noi_cong_tac_id_noi_cong_tac_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 256 (class 1259 OID 18676)
-- Name: nuoc; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nuoc (
    id integer NOT NULL,
    ten_nuoc character varying(255)
);


ALTER TABLE public.nuoc OWNER TO postgres;

--
-- TOC entry 257 (class 1259 OID 18679)
-- Name: nuoc_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.nuoc ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.nuoc_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 258 (class 1259 OID 18681)
-- Name: phong_ban; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.phong_ban (
    id_phong_ban smallint NOT NULL,
    ten_phong_ban character varying(255),
    mo_ta character varying(255),
    trang_thai boolean
);


ALTER TABLE public.phong_ban OWNER TO postgres;

--
-- TOC entry 3226 (class 0 OID 0)
-- Dependencies: 258
-- Name: COLUMN phong_ban.trang_thai; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.phong_ban.trang_thai IS '1-hoat dong, 0- khong hoat dong';


--
-- TOC entry 259 (class 1259 OID 18687)
-- Name: phong_ban_id_phong_ban_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.phong_ban ALTER COLUMN id_phong_ban ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.phong_ban_id_phong_ban_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 260 (class 1259 OID 18689)
-- Name: phuong; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.phuong (
    id integer NOT NULL,
    ten_phuong character varying(255)
);


ALTER TABLE public.phuong OWNER TO postgres;

--
-- TOC entry 261 (class 1259 OID 18692)
-- Name: phuong_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.phuong ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.phuong_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 262 (class 1259 OID 18694)
-- Name: qh_don_thuoc_hang_hoa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.qh_don_thuoc_hang_hoa (
    id integer NOT NULL,
    id_don_thuoc integer,
    id_hang_hoa integer,
    so_luong integer,
    lieu_dung character varying(400)
);


ALTER TABLE public.qh_don_thuoc_hang_hoa OWNER TO postgres;

--
-- TOC entry 263 (class 1259 OID 18697)
-- Name: qh_don_thuoc_hang_hoa_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.qh_don_thuoc_hang_hoa ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.qh_don_thuoc_hang_hoa_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 264 (class 1259 OID 18699)
-- Name: qh_don_vi_hang_hoa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.qh_don_vi_hang_hoa (
    id integer NOT NULL,
    id_don_vi integer,
    id_hang_hoa integer,
    gia_tri_quy_doi real,
    gia_ban real,
    ma_hang_hoa character varying(255),
    ma_vach character varying(255),
    trang_thai_nhap_kho boolean,
    trang_thai_ban_truc_tiep boolean,
    trang_thai_canh_bao_het boolean
);


ALTER TABLE public.qh_don_vi_hang_hoa OWNER TO postgres;

--
-- TOC entry 265 (class 1259 OID 18705)
-- Name: qh_don_vi_hang_hoa_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.qh_don_vi_hang_hoa ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.qh_don_vi_hang_hoa_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 266 (class 1259 OID 18707)
-- Name: qh_vi_tri_hang_hoa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.qh_vi_tri_hang_hoa (
    id integer NOT NULL,
    id_vi_tri integer,
    id_hang_hoa integer,
    created_by character varying(255),
    created_date date
);


ALTER TABLE public.qh_vi_tri_hang_hoa OWNER TO postgres;

--
-- TOC entry 267 (class 1259 OID 18710)
-- Name: qh_vi_tri_hang_hoa_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.qh_vi_tri_hang_hoa ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.qh_vi_tri_hang_hoa_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 268 (class 1259 OID 18712)
-- Name: thuoc_quoc_gia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.thuoc_quoc_gia (
    id_thuoc_quoc_gia smallint NOT NULL,
    ma_thuoc character varying(255),
    ten_thuoc character varying(255),
    so_dang_ky character varying(255),
    hoat_chat_chinh character varying(255),
    ham_luong real,
    quy_cach_dong_goi character varying(255),
    hang_san_xuat character varying(255),
    nuoc_san_xuat character varying(255),
    don_vi_tinh character varying(255)
);


ALTER TABLE public.thuoc_quoc_gia OWNER TO postgres;

--
-- TOC entry 269 (class 1259 OID 18718)
-- Name: thuoc_quoc_gia_id_thuoc_quoc_gia_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.thuoc_quoc_gia ALTER COLUMN id_thuoc_quoc_gia ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.thuoc_quoc_gia_id_thuoc_quoc_gia_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 270 (class 1259 OID 18720)
-- Name: tinh; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tinh (
    id integer NOT NULL,
    ten_tinh character varying(255)
);


ALTER TABLE public.tinh OWNER TO postgres;

--
-- TOC entry 271 (class 1259 OID 18723)
-- Name: tinh_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tinh ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tinh_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 272 (class 1259 OID 18725)
-- Name: trinh_do; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.trinh_do (
    id_trinh_do smallint NOT NULL,
    ten_trinh_do character varying(255)
);


ALTER TABLE public.trinh_do OWNER TO postgres;

--
-- TOC entry 273 (class 1259 OID 18728)
-- Name: trinh_do_id_trinh_do_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.trinh_do ALTER COLUMN id_trinh_do ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.trinh_do_id_trinh_do_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 274 (class 1259 OID 18730)
-- Name: vi_tri; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vi_tri (
    id_vi_tri smallint NOT NULL,
    ten_vi_tri character varying(400),
    created_by integer,
    created_date date
);


ALTER TABLE public.vi_tri OWNER TO postgres;

--
-- TOC entry 275 (class 1259 OID 18733)
-- Name: vi_tri_id_vi_tri_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.vi_tri ALTER COLUMN id_vi_tri ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.vi_tri_id_vi_tri_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3124 (class 0 OID 18484)
-- Dependencies: 202
-- Data for Name: bac_si; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3126 (class 0 OID 18489)
-- Dependencies: 204
-- Data for Name: bang_gia; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3128 (class 0 OID 18494)
-- Dependencies: 206
-- Data for Name: chi_nhanh; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3130 (class 0 OID 18502)
-- Dependencies: 208
-- Data for Name: chuc_danh; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3132 (class 0 OID 18510)
-- Dependencies: 210
-- Data for Name: chuyen_khoa; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3134 (class 0 OID 18515)
-- Dependencies: 212
-- Data for Name: dat_hang; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3135 (class 0 OID 18521)
-- Dependencies: 213
-- Data for Name: dat_hang_chi_tiet; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3138 (class 0 OID 18531)
-- Dependencies: 216
-- Data for Name: doi_tac_giao_hang; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3140 (class 0 OID 18536)
-- Dependencies: 218
-- Data for Name: don_thuoc; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3142 (class 0 OID 18544)
-- Dependencies: 220
-- Data for Name: don_thuoc_mau; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3144 (class 0 OID 18552)
-- Dependencies: 222
-- Data for Name: don_vi; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3146 (class 0 OID 18557)
-- Dependencies: 224
-- Data for Name: hang_hoa; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3148 (class 0 OID 18565)
-- Dependencies: 226
-- Data for Name: hang_san_xuat; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3150 (class 0 OID 18570)
-- Dependencies: 228
-- Data for Name: hoa_don; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3152 (class 0 OID 18578)
-- Dependencies: 230
-- Data for Name: kenh_ban; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3154 (class 0 OID 18586)
-- Dependencies: 232
-- Data for Name: khach_hang; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3156 (class 0 OID 18594)
-- Dependencies: 234
-- Data for Name: kho_hang; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3158 (class 0 OID 18602)
-- Dependencies: 236
-- Data for Name: khu_vuc; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3160 (class 0 OID 18610)
-- Dependencies: 238
-- Data for Name: lo_hang; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3162 (class 0 OID 18615)
-- Dependencies: 240
-- Data for Name: nguoi_dung; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.nguoi_dung (id_nguoi_dung, ten_nguoi_dung, ngay_sinh, loai_nguoi_dung, so_dien_thoai, email, dia_chi, id_khu_vuc, id_phuong_xa, is_admin, gioi_tinh, trang_thai, ghi_chu, duong_dan_logo, ten_dang_nhap, mat_khau) OVERRIDING SYSTEM VALUE VALUES (1, 'Nguyễn Văn Hưởng', '1995-02-21', 1, '0964210295', 'mathkudo@gmail.com', NULL, NULL, NULL, NULL, NULL, true, NULL, NULL, 'admin', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');


--
-- TOC entry 3164 (class 0 OID 18623)
-- Dependencies: 242
-- Data for Name: nha_cung_cap; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3166 (class 0 OID 18631)
-- Dependencies: 244
-- Data for Name: nhan_vien; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3168 (class 0 OID 18639)
-- Dependencies: 246
-- Data for Name: nhap_hang; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3170 (class 0 OID 18647)
-- Dependencies: 248
-- Data for Name: nhom_doi_tac_giao_hang; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3172 (class 0 OID 18655)
-- Dependencies: 250
-- Data for Name: nhom_hang_hoa; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3174 (class 0 OID 18663)
-- Dependencies: 252
-- Data for Name: nhom_nha_cung_cap; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3176 (class 0 OID 18671)
-- Dependencies: 254
-- Data for Name: noi_cong_tac; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3178 (class 0 OID 18676)
-- Dependencies: 256
-- Data for Name: nuoc; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3180 (class 0 OID 18681)
-- Dependencies: 258
-- Data for Name: phong_ban; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3182 (class 0 OID 18689)
-- Dependencies: 260
-- Data for Name: phuong; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3184 (class 0 OID 18694)
-- Dependencies: 262
-- Data for Name: qh_don_thuoc_hang_hoa; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3186 (class 0 OID 18699)
-- Dependencies: 264
-- Data for Name: qh_don_vi_hang_hoa; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3188 (class 0 OID 18707)
-- Dependencies: 266
-- Data for Name: qh_vi_tri_hang_hoa; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3190 (class 0 OID 18712)
-- Dependencies: 268
-- Data for Name: thuoc_quoc_gia; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3192 (class 0 OID 18720)
-- Dependencies: 270
-- Data for Name: tinh; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3194 (class 0 OID 18725)
-- Dependencies: 272
-- Data for Name: trinh_do; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3196 (class 0 OID 18730)
-- Dependencies: 274
-- Data for Name: vi_tri; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3227 (class 0 OID 0)
-- Dependencies: 203
-- Name: bac_si_id_bac_si_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bac_si_id_bac_si_seq', 1, false);


--
-- TOC entry 3228 (class 0 OID 0)
-- Dependencies: 205
-- Name: bang_gia_id_bang_gia_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bang_gia_id_bang_gia_seq', 1, false);


--
-- TOC entry 3229 (class 0 OID 0)
-- Dependencies: 207
-- Name: chi_nhanh_id_chi_nhanh_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chi_nhanh_id_chi_nhanh_seq', 1, false);


--
-- TOC entry 3230 (class 0 OID 0)
-- Dependencies: 209
-- Name: chuc_danh_id_chuc_danh_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chuc_danh_id_chuc_danh_seq', 1, false);


--
-- TOC entry 3231 (class 0 OID 0)
-- Dependencies: 211
-- Name: chuyen_khoa_id_chuyen_khoa_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chuyen_khoa_id_chuyen_khoa_seq', 1, false);


--
-- TOC entry 3232 (class 0 OID 0)
-- Dependencies: 214
-- Name: dat_hang_chi_tiet_id_dat_hang_chi_tiet_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dat_hang_chi_tiet_id_dat_hang_chi_tiet_seq', 1, false);


--
-- TOC entry 3233 (class 0 OID 0)
-- Dependencies: 215
-- Name: dat_hang_id_dat_hang_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dat_hang_id_dat_hang_seq', 1, false);


--
-- TOC entry 3234 (class 0 OID 0)
-- Dependencies: 217
-- Name: doi_tac_giao_hang_id_doi_tac_giao_hang_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.doi_tac_giao_hang_id_doi_tac_giao_hang_seq', 1, false);


--
-- TOC entry 3235 (class 0 OID 0)
-- Dependencies: 219
-- Name: don_thuoc_id_don_thuoc_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.don_thuoc_id_don_thuoc_seq', 1, false);


--
-- TOC entry 3236 (class 0 OID 0)
-- Dependencies: 221
-- Name: don_thuoc_mau_id_don_thuoc_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.don_thuoc_mau_id_don_thuoc_seq', 1, false);


--
-- TOC entry 3237 (class 0 OID 0)
-- Dependencies: 223
-- Name: don_vi_id_don_vi_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.don_vi_id_don_vi_seq', 1, false);


--
-- TOC entry 3238 (class 0 OID 0)
-- Dependencies: 225
-- Name: hang_hoa_id_hang_hoa_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hang_hoa_id_hang_hoa_seq', 1, false);


--
-- TOC entry 3239 (class 0 OID 0)
-- Dependencies: 227
-- Name: hang_san_xuat_id_hang_san_xuat_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hang_san_xuat_id_hang_san_xuat_seq', 1, false);


--
-- TOC entry 3240 (class 0 OID 0)
-- Dependencies: 229
-- Name: hoa_don_id_hoa_don_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hoa_don_id_hoa_don_seq', 1, false);


--
-- TOC entry 3241 (class 0 OID 0)
-- Dependencies: 231
-- Name: kenh_ban_id_kenh_ban_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.kenh_ban_id_kenh_ban_seq', 1, false);


--
-- TOC entry 3242 (class 0 OID 0)
-- Dependencies: 233
-- Name: khach_hang_id_khach_hang_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.khach_hang_id_khach_hang_seq', 1, false);


--
-- TOC entry 3243 (class 0 OID 0)
-- Dependencies: 235
-- Name: kho_hang_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.kho_hang_id_seq', 1, false);


--
-- TOC entry 3244 (class 0 OID 0)
-- Dependencies: 237
-- Name: khu_vuc_id_khu_vuc_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.khu_vuc_id_khu_vuc_seq', 1, false);


--
-- TOC entry 3245 (class 0 OID 0)
-- Dependencies: 239
-- Name: lo_hang_id_lo_hang_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lo_hang_id_lo_hang_seq', 1, false);


--
-- TOC entry 3246 (class 0 OID 0)
-- Dependencies: 241
-- Name: nguoi_dung_id_nguoi_dung_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nguoi_dung_id_nguoi_dung_seq', 2, false);


--
-- TOC entry 3247 (class 0 OID 0)
-- Dependencies: 243
-- Name: nha_cung_cap_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nha_cung_cap_id_seq', 1, false);


--
-- TOC entry 3248 (class 0 OID 0)
-- Dependencies: 245
-- Name: nhan_vien_id_nhan_vien_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nhan_vien_id_nhan_vien_seq', 1, false);


--
-- TOC entry 3249 (class 0 OID 0)
-- Dependencies: 247
-- Name: nhap_hang_id_nhap_hang_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nhap_hang_id_nhap_hang_seq', 1, false);


--
-- TOC entry 3250 (class 0 OID 0)
-- Dependencies: 249
-- Name: nhom_doi_tac_giao_hang_id_nhom_doi_tac_giao_hang_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nhom_doi_tac_giao_hang_id_nhom_doi_tac_giao_hang_seq', 1, false);


--
-- TOC entry 3251 (class 0 OID 0)
-- Dependencies: 251
-- Name: nhom_hang_hoa_id_nhom_hang_hoa_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nhom_hang_hoa_id_nhom_hang_hoa_seq', 1, false);


--
-- TOC entry 3252 (class 0 OID 0)
-- Dependencies: 253
-- Name: nhom_nha_cung_cap_id_nhom_nha_cung_Cap_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."nhom_nha_cung_cap_id_nhom_nha_cung_Cap_seq"', 1, false);


--
-- TOC entry 3253 (class 0 OID 0)
-- Dependencies: 255
-- Name: noi_cong_tac_id_noi_cong_tac_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.noi_cong_tac_id_noi_cong_tac_seq', 1, false);


--
-- TOC entry 3254 (class 0 OID 0)
-- Dependencies: 257
-- Name: nuoc_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nuoc_id_seq', 1, false);


--
-- TOC entry 3255 (class 0 OID 0)
-- Dependencies: 259
-- Name: phong_ban_id_phong_ban_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.phong_ban_id_phong_ban_seq', 1, false);


--
-- TOC entry 3256 (class 0 OID 0)
-- Dependencies: 261
-- Name: phuong_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.phuong_id_seq', 1, false);


--
-- TOC entry 3257 (class 0 OID 0)
-- Dependencies: 263
-- Name: qh_don_thuoc_hang_hoa_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.qh_don_thuoc_hang_hoa_id_seq', 1, false);


--
-- TOC entry 3258 (class 0 OID 0)
-- Dependencies: 265
-- Name: qh_don_vi_hang_hoa_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.qh_don_vi_hang_hoa_id_seq', 1, false);


--
-- TOC entry 3259 (class 0 OID 0)
-- Dependencies: 267
-- Name: qh_vi_tri_hang_hoa_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.qh_vi_tri_hang_hoa_id_seq', 1, false);


--
-- TOC entry 3260 (class 0 OID 0)
-- Dependencies: 269
-- Name: thuoc_quoc_gia_id_thuoc_quoc_gia_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.thuoc_quoc_gia_id_thuoc_quoc_gia_seq', 1, false);


--
-- TOC entry 3261 (class 0 OID 0)
-- Dependencies: 271
-- Name: tinh_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tinh_id_seq', 1, false);


--
-- TOC entry 3262 (class 0 OID 0)
-- Dependencies: 273
-- Name: trinh_do_id_trinh_do_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.trinh_do_id_trinh_do_seq', 1, false);


--
-- TOC entry 3263 (class 0 OID 0)
-- Dependencies: 275
-- Name: vi_tri_id_vi_tri_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vi_tri_id_vi_tri_seq', 1, false);


--
-- TOC entry 2926 (class 2606 OID 18736)
-- Name: bac_si bac_si_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bac_si
    ADD CONSTRAINT bac_si_pkey PRIMARY KEY (id_bac_si);


--
-- TOC entry 2928 (class 2606 OID 18738)
-- Name: bang_gia bang_gia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bang_gia
    ADD CONSTRAINT bang_gia_pkey PRIMARY KEY (id_bang_gia);


--
-- TOC entry 2930 (class 2606 OID 18740)
-- Name: chi_nhanh chi_nhanh_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chi_nhanh
    ADD CONSTRAINT chi_nhanh_pkey PRIMARY KEY (id_chi_nhanh);


--
-- TOC entry 2932 (class 2606 OID 18742)
-- Name: chuc_danh chuc_danh_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chuc_danh
    ADD CONSTRAINT chuc_danh_pkey PRIMARY KEY (id_chuc_danh);


--
-- TOC entry 2934 (class 2606 OID 18744)
-- Name: chuyen_khoa chuyen_khoa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chuyen_khoa
    ADD CONSTRAINT chuyen_khoa_pkey PRIMARY KEY (id_chuyen_khoa);


--
-- TOC entry 2938 (class 2606 OID 18746)
-- Name: dat_hang dat_hang_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dat_hang
    ADD CONSTRAINT dat_hang_pkey PRIMARY KEY (id_dat_hang);


--
-- TOC entry 2940 (class 2606 OID 18748)
-- Name: doi_tac_giao_hang doi_tac_giao_hang_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doi_tac_giao_hang
    ADD CONSTRAINT doi_tac_giao_hang_pkey PRIMARY KEY (id_doi_tac_giao_hang);


--
-- TOC entry 2944 (class 2606 OID 18750)
-- Name: don_thuoc_mau don_thuoc_mau_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.don_thuoc_mau
    ADD CONSTRAINT don_thuoc_mau_pkey PRIMARY KEY (id_don_thuoc);


--
-- TOC entry 2942 (class 2606 OID 18752)
-- Name: don_thuoc don_thuoc_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.don_thuoc
    ADD CONSTRAINT don_thuoc_pkey PRIMARY KEY (id_don_thuoc);


--
-- TOC entry 2946 (class 2606 OID 18754)
-- Name: don_vi don_vi_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.don_vi
    ADD CONSTRAINT don_vi_pkey PRIMARY KEY (id_don_vi);


--
-- TOC entry 2950 (class 2606 OID 18756)
-- Name: hang_hoa hang_hoa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hang_hoa
    ADD CONSTRAINT hang_hoa_pkey PRIMARY KEY (id_hang_hoa);


--
-- TOC entry 2952 (class 2606 OID 18758)
-- Name: hang_san_xuat hang_san_xuat_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hang_san_xuat
    ADD CONSTRAINT hang_san_xuat_pkey PRIMARY KEY (id_hang_san_xuat);


--
-- TOC entry 2956 (class 2606 OID 18760)
-- Name: hoa_don hoa_don_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hoa_don
    ADD CONSTRAINT hoa_don_pkey PRIMARY KEY (id_hoa_don);


--
-- TOC entry 2958 (class 2606 OID 18762)
-- Name: kenh_ban kenh_ban_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kenh_ban
    ADD CONSTRAINT kenh_ban_pkey PRIMARY KEY (id_kenh_ban);


--
-- TOC entry 2960 (class 2606 OID 18764)
-- Name: khach_hang khach_hang_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.khach_hang
    ADD CONSTRAINT khach_hang_pkey PRIMARY KEY (id_khach_hang);


--
-- TOC entry 2962 (class 2606 OID 18766)
-- Name: khu_vuc khu_vuc_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.khu_vuc
    ADD CONSTRAINT khu_vuc_pkey PRIMARY KEY (id_khu_vuc);


--
-- TOC entry 2964 (class 2606 OID 18768)
-- Name: lo_hang lo_hang_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lo_hang
    ADD CONSTRAINT lo_hang_pkey PRIMARY KEY (id_lo_hang);


--
-- TOC entry 2966 (class 2606 OID 18770)
-- Name: nguoi_dung nguoi_dung_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nguoi_dung
    ADD CONSTRAINT nguoi_dung_pkey PRIMARY KEY (id_nguoi_dung);


--
-- TOC entry 2968 (class 2606 OID 18772)
-- Name: nhan_vien nhan_vien_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nhan_vien
    ADD CONSTRAINT nhan_vien_pkey PRIMARY KEY (id_nhan_vien);


--
-- TOC entry 2970 (class 2606 OID 18774)
-- Name: nhap_hang nhap_hang_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nhap_hang
    ADD CONSTRAINT nhap_hang_pkey PRIMARY KEY (id_nhap_hang);


--
-- TOC entry 2972 (class 2606 OID 18776)
-- Name: nhom_doi_tac_giao_hang nhom_doi_tac_giao_hang_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nhom_doi_tac_giao_hang
    ADD CONSTRAINT nhom_doi_tac_giao_hang_pkey PRIMARY KEY (id_nhom_doi_tac_giao_hang);


--
-- TOC entry 2974 (class 2606 OID 18778)
-- Name: nhom_hang_hoa nhom_hang_hoa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nhom_hang_hoa
    ADD CONSTRAINT nhom_hang_hoa_pkey PRIMARY KEY (id_nhom_hang_hoa);


--
-- TOC entry 2976 (class 2606 OID 18780)
-- Name: noi_cong_tac noi_cong_tac_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.noi_cong_tac
    ADD CONSTRAINT noi_cong_tac_pkey PRIMARY KEY (id_noi_cong_tac);


--
-- TOC entry 2978 (class 2606 OID 18782)
-- Name: nuoc nuoc_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nuoc
    ADD CONSTRAINT nuoc_pkey PRIMARY KEY (id);


--
-- TOC entry 2980 (class 2606 OID 18784)
-- Name: phong_ban phong_ban_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.phong_ban
    ADD CONSTRAINT phong_ban_pkey PRIMARY KEY (id_phong_ban);


--
-- TOC entry 2982 (class 2606 OID 18786)
-- Name: phuong phuong_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.phuong
    ADD CONSTRAINT phuong_pkey PRIMARY KEY (id);


--
-- TOC entry 2984 (class 2606 OID 18788)
-- Name: qh_don_thuoc_hang_hoa qh_don_thuoc_hang_hoa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.qh_don_thuoc_hang_hoa
    ADD CONSTRAINT qh_don_thuoc_hang_hoa_pkey PRIMARY KEY (id);


--
-- TOC entry 2986 (class 2606 OID 18790)
-- Name: qh_don_vi_hang_hoa qh_don_vi_hang_hoa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.qh_don_vi_hang_hoa
    ADD CONSTRAINT qh_don_vi_hang_hoa_pkey PRIMARY KEY (id);


--
-- TOC entry 2988 (class 2606 OID 18792)
-- Name: qh_vi_tri_hang_hoa qh_vi_tri_hang_hoa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.qh_vi_tri_hang_hoa
    ADD CONSTRAINT qh_vi_tri_hang_hoa_pkey PRIMARY KEY (id);


--
-- TOC entry 2936 (class 2606 OID 18794)
-- Name: chuyen_khoa ten_chuyen_khoa; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chuyen_khoa
    ADD CONSTRAINT ten_chuyen_khoa UNIQUE (ten_chuyen_khoa);


--
-- TOC entry 2948 (class 2606 OID 18796)
-- Name: don_vi ten_don_vi; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.don_vi
    ADD CONSTRAINT ten_don_vi UNIQUE (ten_don_vi);


--
-- TOC entry 2954 (class 2606 OID 18798)
-- Name: hang_san_xuat ten_hang_san_xuat; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hang_san_xuat
    ADD CONSTRAINT ten_hang_san_xuat UNIQUE (ten_hang_san_xuat);


--
-- TOC entry 2990 (class 2606 OID 18800)
-- Name: thuoc_quoc_gia thuoc_quoc_gia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.thuoc_quoc_gia
    ADD CONSTRAINT thuoc_quoc_gia_pkey PRIMARY KEY (id_thuoc_quoc_gia);


--
-- TOC entry 2992 (class 2606 OID 18802)
-- Name: tinh tinh_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tinh
    ADD CONSTRAINT tinh_pkey PRIMARY KEY (id);


--
-- TOC entry 2994 (class 2606 OID 18804)
-- Name: trinh_do trinh_do_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trinh_do
    ADD CONSTRAINT trinh_do_pkey PRIMARY KEY (id_trinh_do);


--
-- TOC entry 2995 (class 2606 OID 18805)
-- Name: bac_si nguoi_dung; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bac_si
    ADD CONSTRAINT nguoi_dung FOREIGN KEY (id_nguoi_dung) REFERENCES public.nguoi_dung(id_nguoi_dung);


--
-- TOC entry 2996 (class 2606 OID 18810)
-- Name: doi_tac_giao_hang nguoi_dung; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doi_tac_giao_hang
    ADD CONSTRAINT nguoi_dung FOREIGN KEY (id_nguoi_dung) REFERENCES public.nguoi_dung(id_nguoi_dung);


--
-- TOC entry 2997 (class 2606 OID 18815)
-- Name: nhan_vien nguoi_dung; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nhan_vien
    ADD CONSTRAINT nguoi_dung FOREIGN KEY (id_nguoi_dung) REFERENCES public.nguoi_dung(id_nguoi_dung);


-- Completed on 2020-11-22 11:50:22

--
-- PostgreSQL database dump complete
--

