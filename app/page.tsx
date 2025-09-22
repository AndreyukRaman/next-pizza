
import {Container} from "@/components/shared/container";
import {Title} from "@/components/shared/title";
import {TopBar} from "@/components/shared/top-bar";
import {Filters} from "@/components/shared/filters";


export default function Home() {
  return (

   <>
       <Container className="mt-10">
<Title text="Все пиццы" size="lg" className="font-extrabold"/>
       </Container>
          <TopBar/>

       <Container className=" mt-10 pb-14">
<div className="flex gap-[60px]">

    {/* Фильтрация */}
<div className="w-[250px]">
    <Filters/>
</div>

    {/* Список товаров */}
    <div className="flex-1">
        <div className="flex flex-col gap-16">
            {/*<ProductGroupList title="Пиццы" items={[1,2,3,4,5]}/>*/}
            {/*<ProductGroupList title="Комбо" items={[1,2,3,4,5]}/>*/}
Список товаров
        </div>
    </div>

    {/*  Фильтр ингридиентов */}


</div>
       </Container>
   </>

  );
}
