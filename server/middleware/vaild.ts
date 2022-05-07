import { Request, Response, NextFunction } from 'express'

export const validRegister = async (req: Request, res: Response, next: NextFunction) => {
  const { name, account, password } = req.body

  const errors = [];

  if(!name){
    errors.push("ກະລຸນາປ້ອນຊື່")
  }else if(name.length > 100){
    errors.push("Your name is up to 100 chars long.")
  }

  if(!account){
    errors.push("ກະລຸນາປ້ອນອີເມວ")
  }else if(!validPhone(account) && !validateEmail(account)){
    errors.push("Email or phone number format is incorrect.")
  }

  if(password.length < 6){
    errors.push("ກະລຸນາປ້ອນລະຫັດຜ່ານໃຫ້ເກີນກວ່າ 6 ໂຕ")
  }

  if(errors.length > 0) return res.status(400).json({msg: errors})

  next();
}



export function validPhone(phone: string) {
  const re = /^[+]/g
  return re.test(phone)
}

export function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}