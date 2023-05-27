import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app/app.module';
import { SeederService } from './app/seeder/seeder.service';

async function bootstrap() {
  const logger = new Logger('Seeder');
  let resultsBuSeed = null;
  let resultsPortfolio = null;

  try {
    const app = await NestFactory.createApplicationContext(AppModule);
    const seederService = app.get(SeederService);

    logger.log('Starting Seeder process for Bu Owner Records!');
    [resultsBuSeed, resultsPortfolio] = await Promise.allSettled([
      seederService.seedBuOwner(),
      seederService.seedPortfolio(),
    ]);
  } finally {
    logger.log('Seeder process has finished. Results');
    if (
      resultsBuSeed.erroredRecords.length ||
      resultsPortfolio.erroredRecords.length
    ) {
      logger.warn(
        'Errored Records',
        resultsBuSeed.erroredRecords,
        resultsPortfolio.erroredRecords
      );
    } else logger.log('All the records were successfully saved');

    process.exit(0);
  }
}

bootstrap();
