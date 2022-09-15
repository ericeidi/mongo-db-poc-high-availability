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
  async postUser(@Body() data) {
    const arrData = new Array(88000).fill({
      name: data.name,
    });
    const start = performance.now();
    await this.userService.create(arrData);
    const end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
  }
}
