import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/user.dto';
import { User } from 'src/schemas/user.schema';

@Controller('users-admin')
@ApiTags('user-admin')
export class UsersAdminController {
  constructor(private readonly usersAdminService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDto): Promise<User> {
    return this.usersAdminService.create(body);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersAdminService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersAdminService.findOne(id);
  }
}
