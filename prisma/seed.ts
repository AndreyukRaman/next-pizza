import {prisma} from "../prisma/prisma-client";
import {hashSync} from 'bcrypt';

async function up(){

   await prisma.user.createMany({
       data: [
           {
              fullName: "User",
              email: 'user@test.ru',
              password: hashSync('11111', 10) ,
               // verified: new Date().toISOString(),
               role: 'USER'
           },
           {
               fullName: "Admin",
               email: 'admin@test.ru',
               password: hashSync('11111', 10) ,
               // verified: new Date().toISOString(),
               role: 'ADMIN',
           },
       ]
   })

}


async function down(){
await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main(){
try {
    await down();
    await up();

}catch(e){
    console.error(e);
}
}

main().then(async ()=>{
    await prisma.$disconnect();
}).catch(async (e)=>{
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})