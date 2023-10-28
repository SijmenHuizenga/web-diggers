use actix_web::{get, middleware, App, HttpResponse, HttpServer, Responder};
use serde_json::Value;
use std::env::current_dir;
use std::fs::File;
use std::path::{PathBuf};

#[get("/")]
async fn get_root() -> impl Responder {
    HttpResponse::Ok()
}

#[get("/health")]
async fn get_health() -> impl Responder {
    HttpResponse::Ok().body("Server running")
}

#[get("/json")]
async fn get_json() -> impl Responder {
    let file_path: PathBuf = current_dir()
        .expect("Error while listing current directory")
        .parent()
        .expect("Error while navigating to the parent")
        .join("data/web-diggers-alpha.json");
    let file = File::open(file_path).expect("Failed to open JSON file");
    let json_obj: Value = serde_json::from_reader(file).expect("Failed to parse JSON file");

    return HttpResponse::Ok().json(json_obj);
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(middleware::Logger::default())
            .service(get_root)
            .service(get_health)
            .service(get_json)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
