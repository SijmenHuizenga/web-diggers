mod controllers;

use actix_cors::Cors;
use actix_web::{http, middleware, App, HttpServer};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let cors = Cors::default()
            .allowed_origin("http://localhost:5173")
            .allowed_methods(vec!["GET", "POST"])
            .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
            .allowed_header(http::header::CONTENT_TYPE)
            .max_age(3600);

        App::new()
            .wrap(middleware::Logger::default())
            .wrap(cors)
            .service(controllers::get_root)
            .service(controllers::get_health)
            .service(controllers::get_json)
            .service(controllers::get_csv)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
