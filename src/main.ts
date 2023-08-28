import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService).get();

  await app.listen(config.PORT, () => {
    console.log('ENVIRONMENT LOADED: ', config);
    console.log('Server running at PORT ->', config.PORT);
  });
}
bootstrap();
