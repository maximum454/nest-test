import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {SwaggerExplorer} from "@nestjs/swagger/dist/swagger-explorer";

async function start() {
    const PORT = process.env.PORT || 3000
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Документация REST API')
        .setDescription('Изучаем Backend Nest')
        .setVersion('1.0.0')
        .addTag('NestJs Typescript Postgres')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => console.log('Server start on port ' + PORT));
}

start();
