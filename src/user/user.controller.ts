import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getUser() {
    await this.userService.findAll();
  }
  @Post('create')
  async postUser() {
    const arrData = new Array(10000).fill({
      clientCode: '179',
      clientName: 'MAURICIO FILHO',
      titleNumber: '1060124/A116',
      emissionDate: new Date(),
      dueDate: new Date(),
      competencyDate: 'TODO',
      titleSituation: 'AB',
      openTitleValue: '263.54',
      titleInterestTicket: 0.58,
      titleTicket: 0.04,
      titleDiscount: 0,
      titleInterest: 0.54,
      totalTitleValue: 264.12,
      titleCodeType: '123',
      titlePayer: 'TODO',
      originDocument: 'TODO',
      transaction: '90321',
      observation: 'FATURA: 999227O',
    });
    const start = performance.now();
    await this.userService.create(arrData);
    const end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
  }
}
