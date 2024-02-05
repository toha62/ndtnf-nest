import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class BookBodyValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Validation body');
    console.log(value);
    console.log(metadata);
    if (value.title && value.authors) {
      return value;
    }
    throw new BadRequestException('Validation failed');
  }
}
