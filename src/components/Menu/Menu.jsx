import MenuButton from '../MenuButtons/MenuButton';
import FoodContainer from '../FoodContainer/FoodContainer';
import './Menu.css'
const Menu = () => {
   

  

	return (
        <section className="menu">
            <div className="container">
           <MenuButton/>
			<FoodContainer/>

            </div>
		</section>
	);
};

export default Menu;
