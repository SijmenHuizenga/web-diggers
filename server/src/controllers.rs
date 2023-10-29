use serde_json::Value;
use std::env::current_dir;
use std::fs::{read_to_string, File};
use std::path::PathBuf;
use actix_web::{get, http, HttpResponse, Responder};

#[get("/")]
pub async fn get_root() -> impl Responder {
    HttpResponse::Ok()
}

#[get("/health")]
pub async fn get_health() -> impl Responder {
    HttpResponse::Ok().body("Server running")
}

#[get("/json")]
pub async fn get_json() -> impl Responder {
    let file_path: PathBuf = get_data_file_path("web-diggers-alpha.json");
    let file = File::open(file_path).expect("Failed to open JSON file");
    let json_obj: Value = serde_json::from_reader(file).expect("Failed to parse JSON file");

    HttpResponse::Ok().json(json_obj)
}

#[get("/csv")]
pub async fn get_csv() -> impl Responder {
    let file_path = get_data_file_path("web-diggers-alpha.csv");
    let file = read_to_string(file_path).expect("Failed to read CSV file");

    HttpResponse::Ok()
        .append_header(http::header::ContentType(mime::TEXT_CSV))
        .body(file)
}

fn get_data_file_path(filename: &str) -> PathBuf {
    current_dir()
        .expect("Error while listing current directory")
        .parent()
        .expect("Error while navigating to the parent")
        .join("data")
        .join(filename)
}