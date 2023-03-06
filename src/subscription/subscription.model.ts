import { ApiProperty, OmitType } from '@nestjs/swagger';

export class SubscriptionDTO {

  @ApiProperty({
    type: String,
    description: 'subscription id'
  })
  id?: string;

  @ApiProperty({
    type: String,
    description: 'subscription email'
  })
  email: string;

  @ApiProperty({
    type: String,
    description: 'fist name'
  })
  firstName?: string;

  @ApiProperty({
    type: String,
    description: 'last name'
  })
  lastName?: string;

  @ApiProperty({
    type: String,
    description: 'gender'
  })
  gender?: string;

  @ApiProperty({
    type: String,
    description: 'date of bith'
  })
  dateOfBirth: string;

    @ApiProperty({
    type: Boolean,
    description: 'consent'
  })
  consent: boolean;

  @ApiProperty({
    type: String,
    description: 'newsletter id'
  })
  newsletterId: string;
}

export class CreateSubscriptionDTO extends OmitType(SubscriptionDTO, ['id']) {}
