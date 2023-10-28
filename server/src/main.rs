use actix_web::{get, middleware, App, HttpResponse, HttpServer, Responder};
use std::{error::Error, io, process};
use csv::Reader;

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
    HttpResponse::Ok().json("{name: Luke, surname: Skywalker}")
}

/*
fn csv_to_json(filename:&str) -> Result<(), Box<dyn Error>> {
    // Build the CSV reader and iterate over each record.
    println!("hello hello....");
    let mut rdr = Reader::from_path(filename);
    for r in rdr.deserialize() {
        // The iterator yields Result<StringRecord, Error>, so we check the
        // error here.
        let record: Record = r?;
        println!("{:?}", record);

        //let json_record = serde_json::to_value(result)?;
        //println!("{}", json_record[0]);
    }
    Ok(())
}
*/

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(middleware::Logger::default())
            .service(root_route)
            .service(get_health)
            .service(get_json)
           // .service(get_csv)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
