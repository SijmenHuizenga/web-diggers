use actix_web::{get, middleware, App, HttpResponse, HttpServer, Responder};
use serde_json::{Result, Value};
use csv::Reader;

#[get("/")]
async fn root_route() -> impl Responder {
    HttpResponse::Ok()
}

#[get("/health")]
async fn health() -> impl Responder {
    HttpResponse::Ok().body("Server running")
}

#[get("/json")]
async fn json() -> impl Responder {
    HttpResponse::Ok().json("{name: Luke, surname: Skywalker}")
}

#[get("/csv")]
async fn csv() -> impl Responder {
    let mut reader = Reader::from_path("../../web-diggers-alpha.csv")?;
    let records = reader.records();

    for record in records {
        // Convert each row into a JSON object
        let json_record = serde_json::to_value(record)?;
        println!("{}", json_record);
    }
    HttpResponse::Ok().body("Hello world")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(middleware::Logger::default())
            .service(root_route)
            .service(health)
            .service(json)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
