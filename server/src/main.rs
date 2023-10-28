use actix_web::{get, middleware, App, HttpResponse, HttpServer, Responder};
use serde_json::{Value};
use std::{fs::File};

#[get("/")]
async fn root_route() -> impl Responder {
    HttpResponse::Ok()
}

#[get("/health")]
async fn get_health() -> impl Responder {
    HttpResponse::Ok().body("Server running")
}

#[get("/json")]
async fn get_json() -> impl Responder {
    let file = File::open("../../data/web-diggers-alpha.json").expect("Failed to parse JSON file");
    let json_obj: Value = serde_json::from_reader(file).expect("Failed to parse JSON file");
    return HttpResponse::Ok().json(json_obj);
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(middleware::Logger::default())
            .service(root_route)
            .service(get_health)
            .service(get_json)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
