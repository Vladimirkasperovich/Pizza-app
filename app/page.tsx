import {Container, Filters, Title, TopBar} from "@/components/shared";
import {ProductsGroupList} from "@/components/shared/products-group-list";
import {breakFasts, pizzas} from "@/helpers/constants";

export default function Home() {
    return (
        <>
            <Container className='mt-10'>
                <Title text='Все пиццы' size='lg' className='font-extrabold'/>
            </Container>
            <TopBar/>

            <Container className='mt-10 pb-14'>
                <div className='flex gap-[80px]'>
                    {/*Фильтрация*/}
                    <div className='w-[250px]'>
                        <Filters/>
                    </div>
                    {/*Список товаров*/}
                    <div className='flex-1'>
                        <div className='flex flex-col gap-16'>
                            <ProductsGroupList title='Пиццы' items={pizzas} categoryId={1}/>
                            <ProductsGroupList title='Завтраки' items={breakFasts} categoryId={2}/>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
