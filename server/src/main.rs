use actix_web::{get, middleware, App, HttpResponse, HttpServer, Responder};

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
