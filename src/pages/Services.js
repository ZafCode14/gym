import React from 'react';
import './Services.css'
import ServiceType from '../components/ServiceType';
import Service from '../components/Service';

function Services(props) {
    return (
        <div className='services-container c_w bc_d2'>
            <h1>HELPING YOU REACH HIGHER AND <span className='c_o'>ACHIVE MORE</span></h1>
            <div className='service-types'>
                <ServiceType
                icon={"./images/Spinning.png"}
                title={"THE RIDE"}
                description={"Viverra nulla vel ultricies in sit. Eu ullamcorper fringilla platea natoque."}
                />
                <ServiceType
                icon={"./images/PrenatalYoga.png"}
                title={"MIND BODY BURN"}
                description={"Semper augue dictumst eros mattis in leo elit venena ultrices."}
                />
                <ServiceType
                icon={"./images/Dancing.png"}
                title={"CARDIO & DANCE"}
                description={"Neque quam morbi euismod cras ullamcorper nibh purus lacinia."}
                />
                <ServiceType
                icon={"./images/Deadlift.png"}
                title={"ACTION SPORTS"}
                description={"In amet a donec amet dolor, viverra urna tempor. Ultrices et risus amet."}
                />
            </div>
            <section className='services'>
                <Service
                photo={"photo_0x01"}
                title={"CLASSES"}
                par1={"Id tristique massa in ac, egestas. Nam curabitur vitae aenean integer blandit. Suspendisse pellentesque sed lectus turpis consectetur ultrices. Vel dictum vulputate vitae risus, ac a. Arcu pellentesque"}
                par2={"Nunc leo tempor eleifend fusce imperdiet. Ipsum aliquam ornare tortor, quam fames sed felis. Quis quis a nec ac senectus eget nascetur risus consequat."}
                order={[1, 2]}
                />
                <Service
                photo={"photo_0x02"}
                title={"PERSONAL TRAINING"}
                par1={"Leo tellus, nisi, ac luctus habitasse. Est cursus elementum sed eu egestas cras amet. Habitant varius curabitur auctor a dui at. Sed tempus interdum sit egestas at dapibus ac. Aliquam tellus faucibus dictum"}
                par2={"Tempus nunc, vel nisi. Lacinia lacinia vitae posuere ac et a. Sit commodo, feugiat orci, ut ac.Viverra duis malesuada egestas cursus tortor."}
                order={[2, 1]}
                />
                <Service
                photo={"photo_0x03"}
                title={"CROSSFIT"}
                par1={"Turpis facilisis vel purus senectus lorem dictum dolor, id. Elementum dui et sociis libero. Metus odio praesent feugiat elit amet, enim in eros, velit."}
                par2={"Lorem lectus feugiat varius iaculis. Ut leo ultricies quis id phasellus. Integer faucibus id tristique leo eu. Mi risus cursus sollicitudin tincidunt arcu arcu. Amet nibh iaculis amet eu quis. Aliquet integer."}
                order={[1, 2]}
                />
                <Service
                photo={"photo_0x04"}
                title={"BOXING"}
                par1={"Pretium egestas sagittis, gravida tincidunt leo justo. Facilisis enim pharetra, eu est. Commodo nulla arcu quam suspendisse. Cras sit felis, tristique et massa auctor. Euismod interdum dignissim lectus"}
                par2={"Velit facilisis leo lectus cursus eros. Velit congue commodo cum orci, est, purus. Ut ac aliquam quis aliquet id. Imperdiet auctor imperdiet ipsum."}
                order={[2, 1]}
                />
            </section>
        </div>
    );
}

export default Services;