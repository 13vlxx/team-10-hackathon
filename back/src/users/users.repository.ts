import { Injectable, NotFoundException } from '@nestjs/common';
import { EncryptionService } from 'src/encryption/encryption.service';

@Injectable()
export class UsersRepository {
  private readonly orFailNotFound = new NotFoundException('User not found');

  constructor(private readonly encryptionService: EncryptionService) {}

  // findOneById = (id: string) => this.model.findById(id).exec();
  //
  //   findOneByIdOrThrow = (id: string) => this.model.findById(id).orFail(this.orFailNotFound).exec();
  //
  //   findOneByEmailOrThrow = (email: string) =>
  //     this.model.findOne({ email: email, deletedAt: null }).orFail(this.orFailNotFound).exec();
  //
  //   findOneByTokenOrThrow = (token: string) =>
  //     this.model
  //       .findOne({ recoveryToken: token, recoveryTokenExpires: { $gt: new Date() }, deletedAt: null })
  //       .orFail(this.orFailNotFound)
  //       .exec();
  //
  //   updatePasswordById = (id: Types.ObjectId, password: string) =>
  //     this.model
  //       .findByIdAndUpdate(id, {
  //         password: this.encryptionService.encrypt(password),
  //         recoveryToken: null,
  //         recoveryTokenExpires: null,
  //       })
  //       .exec();
  //
  //   userWithEmailExists = (email: string) => this.model.exists({ email: email, deletedAt: null }).exec();
  //
  //   recoverAccountPassword = (email: string) =>
  //     this.model
  //       .findOneAndUpdate(
  //         { email: email },
  //         { recoveryToken: randomStringGenerator(), recoveryTokenExpires: dayjs().add(5, 'm').toDate() },
  //         { new: true },
  //       )
  //       .orFail(this.orFailNotFound)
  //       .exec();
  //
  //   createUser(createUserDto: CreateUserDto) {
  //     const hashPassword = this.encryptionService.encrypt(createUserDto.password);
  //
  //     return this.model.create({
  //       email: createUserDto.email,
  //       firstname: createUserDto.firstname,
  //       lastname: createUserDto.lastname,
  //       password: hashPassword,
  //       role: createUserDto.role,
  //     });
  //   }
  //
  //   deleteUser = (userToDelete: UserDocument) =>
  //     this.model.findByIdAndUpdate(userToDelete._id, { deletedAt: new Date() }).exec();
}