import "./Category.css"
import dentist from "../Images/dentist.jpg"
import dietitian from "../Images/dietitian.jpg"
import gynecologist from "../Images/gynecologist.jpg"
import Card from "../Component/Cards/Card"
import { Link } from "react-router-dom"
const Category = () => {

  const categoryData=[
    {
      id:1,
      image:dentist,
      title:"Dentist",
      desc:"Teething troubles? Schedule a dental checkup",
      link:"/dentist",
    },
    {
      id:2,
      image:gynecologist,
      title:"Gynecologist/Obstetrician",
      desc:"Explore for women's health, pregnancy and infertility treatments",
      link:"/gynecologist",
    },
    {
      id:3,
      image:dietitian,
      title:"Dietitian/Nutrition",
      desc:"Get guidance on eating right, weight management and sports nutrition",
      link:"/dietitian",
    }
  ]
  return (
    <div className='main-wrapper'>
        <div className='category-header'>
            <h2>Book an appointment for an in-clinic consultation</h2>
            <p>Find experienced doctors across all specialties</p>
        </div>

        <div className="card">
          {
            categoryData.map((item)=>(
              <Link to={item.link} key={item.id}>
                <Card {...item}/>
              </Link>
            ))
          }
        </div>
    </div>
  )
}

export default Category