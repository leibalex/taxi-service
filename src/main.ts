import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ConfigService } from './config/config.service';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix(configService.globalApiPrefix);

  const options = new DocumentBuilder()
    .setTitle("Taxi service")
    .setDescription("The Taxi Service API description")
    .setBasePath(`/${configService.globalApiPrefix}`)
    .setVersion("1.0")
    .addTag("taxi")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  console.log(`${configService.globalApiPrefix}/swagger-docs`);
  SwaggerModule.setup(`${configService.globalApiPrefix}/swagger-docs`, app, document);


  await app.listen(configService.serverPort, () => console.log(`Server successfully started on port: ${configService.serverPort}`));
}
bootstrap();
