import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from 'src/shared/constants/env';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule.initialize());
  await app.listen(PORT);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
