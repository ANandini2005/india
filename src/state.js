import React from 'react';
import './state.css';
import { callApi, errorResponse, getSession, setSession } from './main';
import menuicon from './images/menu.jpg';
import andhraPradesh from './images/states/ap.png';
import arunachalPradesh from './images/states/arunachal.gif';
import assam from './images/states/assam.png';
import bihar from './images/states/bihar.jpg';
import chhattisgarh from './images/states/chhattisgarh.png';
import goa from './images/states/goa.png';
import gujarat from './images/states/gujarat.jpg';
import haryana from './images/states/haryana.png';
import hima from './images/states/hima.png';
import jhar from './images/states/jhar.png';
import Karnataka from './images/states/Karnataka.jpg';
import kerala from './images/states/kerala.jpg';
import maha from './images/states/maha.png';
import mani from './images/states/mani.jpg';
import megha from './images/states/megha.png';
import mizo from './images/states/mizo.png';
import mp from './images/states/mp.gif';
import nagaland from './images/states/nagaland.png';
import odisha from './images/states/odisha.jpg';
import punjab from './images/states/punjab.png';
import raj from './images/states/raj.jpg';
import sikkim from './images/states/sikkim.jpg';
import tamil from './images/states/tamil.jpg';
import telangana from './images/states/telangana.webp';
import tripura from './images/states/tripura.jpg';
import uk from './images/states/uk.jpg';
import up from './images/states/up.webp';
import west from './images/states/west.jpg';
import { NavLink } from 'react-router-dom';
import logouticon from './images/logout.webp';


const HS1 = { "padding-left": "5px", "font-weight": "bold" };
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS3 = {"float" : "right", "height" : "16px", "margin-top" : "6px", "cursor" : "pointer"};
const HS4 = {"float" : "right", "padding-right" : "10px"};


class AndhraPradeshInfo extends React.Component {
    render() {
        return (
            <div className="info-container" >
                <div className="text-container" style={{ fontSize: '18px',textAlign: 'justify'  }}>
                    <h2 className="heading">Andhra Pradesh: A Cultural Melting Pot</h2>
                    <p>Andhra Pradesh, known as the "Rice Bowl of India," boasts a rich cultural tapestry shaped by diverse dynasties and empires. The cultural hub, Rajahmundry, epitomizes this amalgamation of customs and traditions, fostering a vibrant cultural scene.</p>
                    <h2 className="heading">Melodies and Movements: Music and Dance</h2>
                    <p>Andhra Pradesh resonates with a rich musical heritage,including renowned Carnatic musicians and vibrant folk melodies.Kuchipudi, a classical dance form, takes center stage,accompanied by a plethora of traditional dance forms such as Burrakatha and Dhimsa.</p>
                    <h2 className="heading">Linguistic Diversity: Languages of the Land</h2>
                    <p>Telugu, the regional language, stands as the heart of Andhra Pradesh's cultural identity,  enriched by its association with literature and poetry.  Alongside Telugu, languages like English, Hindi, Urdu, and Banjara thrive, reflecting the state's cosmopolitan ethos.</p>
                    <h2 className="heading">Capital City Chronicles: Amaravati</h2>
                    <p>Amaravati, nestled on the banks of the Krishna River,  serves as the capital, steeped in history with its ancient  Buddhist stupa dating back to 200 BCE. Since its designation as  the capital in 2017, ongoing development projects aim to elevate  Amaravati into a bustling hub of commerce and culture. </p>
                </div>
                <div className="image-container">
                </div>
            </div>
        );
    }
}



class ArunachalPradeshInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
                <div className="text-container" style={{ fontSize: '15px',textAlign: 'justify'  }}>
                <h2 className="heading">Arunachal Pradesh: Land of Cultural Diversity</h2>
                <p>Arunachal Pradesh, nestled in the northeastern corner of India, is renowned for its rich cultural tapestry, reflecting the diverse ethnic groups that call it home.</p>
                    <h2 className="heading">Dance and Music of Arunachal</h2>
                    <p>The people of Arunachal Pradesh are patrons of dance and music. They dance and sing on important occasions – during festivals and marriages. Dances are different for different tribal groups. They vary from highly stylized religious dance dramas of the Buddhists to the martial steps and colorful performances of the Noctes and Wanchos.Most of the dances are performed in groups – where both males and females take part. However, in some dances females are not allowed to dance with the male dancers. These dances are Igu dance of the Mishmi priests, war dances of the Adis, Noctes and Wanchos, and ritualistic dances of the Buddhist tribes.</p>
                    <h2 className="heading">Tribal Traditions: Rich Cultural Heritage</h2>
                    <p>The state boasts a vibrant tapestry of tribal cultures, each with its unique traditions, festivals, and rituals. From the Adi to the Nyishi tribes, Arunachal Pradesh showcases a mosaic of customs and lifestyles.</p>
                    <h2 className="heading">Festivals Galore: Celebrations in Abundance</h2>
                    <p>Arunachal Pradesh is alive with colorful festivals throughout the year, offering a glimpse into the region's rich cultural heritage. Festivals like Losar, Nyokum, and Mopin showcase traditional dances, music, and rituals.</p>
                    <h2 className="heading">Artisanal Excellence: Handicrafts and Handlooms</h2>
                    <p>The state is renowned for its exquisite handicrafts and handlooms, reflecting the skilled craftsmanship of its people. Intricate bamboo and cane works, traditional weavings, and ornate jewelry are among the prized creations of Arunachal Pradesh.</p>
                    <h2 className="heading">Capital City Charm: Itanagar</h2>
                    <p>Itanagar, the capital city, serves as a melting pot of cultures, blending modernity with tradition. The Itanagar Buddhist Temple and the nearby Ganga Lake are popular landmarks that embody the essence of Arunachal Pradesh's cultural and natural heritage.</p>
                    </div>
                <div className="image-container">
                </div>
            </div>
        );
    }
}

class AssamInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
                <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Assam: Gateway to Northeast India</h2>
                <p>Assam, nestled in the northeastern region of India, is known as the gateway to Northeast India, boasting a rich cultural heritage and scenic landscapes.</p>
                <h2 className="heading">Dance and Music of Assam</h2>
                <p>Assamese culture is vibrant with dance and music being integral parts of its tradition. Bihu, the most celebrated festival, is marked by energetic Bihu dances and melodious Bihu songs.</p>
                <h2 className="heading">Tribal Traditions: Diverse Cultures</h2>
                <p>The state is home to various indigenous tribes, each with its unique customs and traditions. From the Bodos to the Karbis, Assam showcases a rich tapestry of tribal cultures.</p>
                <h2 className="heading">Festivals: Colorful Celebrations</h2>
                <p>Assam is renowned for its colorful festivals like Bihu, Durga Puja, and Magh Bihu, which bring communities together in joyous celebrations filled with dance, music, and feasting.</p>
                <h2 className="heading">Handicrafts and Cuisine: Artistic Creations</h2>
                <p>Assam's handicrafts, including bamboo and cane products, silk weaving, and pottery, reflect the artistic prowess of its people. Assamese cuisine, with its delectable flavors, adds to the state's cultural richness.</p>
                <h2 className="heading">Capital City: Dispur</h2>
                <p>Dispur, the capital city, serves as the administrative hub, blending modernity with tradition. The Assam State Museum and Kamakhya Temple are notable landmarks representing the state's cultural heritage.</p>
                </div>
                <div className="image-container">
                </div>
            </div>
        );
    }
}
class BiharInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
                <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Bihar: Cradle of Ancient Civilization</h2>
                <p>Bihar, situated in the eastern part of India, is revered as the cradle of ancient civilization, boasting a rich cultural legacy and historical significance.</p>
                <h2 className="heading">Dance and Music of Bihar</h2>
                <p>Bihar's cultural landscape is enlivened by vibrant dance forms like Jat-Jatin, Jhijhian, and Jumariya, accompanied by traditional musical instruments. Festivals like Chhath Puja are marked by melodious folk songs and rhythmic dances.</p>
                <h2 className="heading">Tribal Diversity: Varied Cultures</h2>
                <p>The state is home to diverse tribal communities, each with its unique customs and traditions. From the Santhals to the Mundas, Bihar showcases a mosaic of tribal cultures.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Bihar is known for its colorful festivals like Chhath Puja, Sama-Chakeva, and Sonepur Mela, which are celebrated with great fervor, showcasing the state's cultural vibrancy and religious fervor.</p>
                <h2 className="heading">Art and Craftsmanship</h2>
                <p>Bihar's artistic heritage is reflected in its exquisite Madhubani paintings, intricate sikki grass crafts, and fine silk weaving. These artistic creations are a testament to the state's rich cultural heritage.</p>
                <h2 className="heading">Capital City: Patna</h2>
                <p>Patna, the capital city, serves as the cultural and political center of Bihar. The Patna Museum and Golghar are prominent landmarks that showcase the state's historical and architectural heritage.</p>
                     </div>
                <div className="image-container">
                </div>
            </div>
        );
    }
}
class ChhattisgarhInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Chhattisgarh: Land of Rich Tribal Heritage</h2>
                <p>Chhattisgarh, located in central India, is renowned for its rich tribal heritage, vibrant culture, and diverse traditions.</p>
                <h2 className="heading">Dance and Music of Chhattisgarh</h2>
                <p>Chhattisgarh's cultural fabric is adorned with traditional dance forms like Panthi, Raut Nacha, and Karma, accompanied by folk music created using indigenous instruments. Festivals like Bastar Dussehra are marked by colorful performances and rhythmic beats.</p>
                <h2 className="heading">Tribal Diversity: Cultural Mosaic</h2>
                <p>The state is home to various indigenous tribes, including the Gonds, Maria, and Baigas, each preserving its unique customs, rituals, and lifestyle. Chhattisgarh's tribal communities contribute significantly to its cultural richness.</p>
                <h2 className="heading">Festivals and Rituals</h2>
                <p>Chhattisgarh celebrates a plethora of festivals and rituals, such as Hareli, Pola, and Navakhani, which are deeply rooted in tradition and folklore. These celebrations showcase the state's cultural diversity and spiritual fervor.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Chhattisgarh's artistic heritage is evident in its exquisite handicrafts, including tribal jewelry, terracotta pottery, and Dhokra art. These artistic expressions reflect the state's deep connection to its cultural roots.</p>
                <h2 className="heading">Capital City: Raipur</h2>
                <p>Raipur, the capital city, serves as the cultural and economic hub of Chhattisgarh. The Mahant Ghasidas Museum and Nandan Van Zoo are notable landmarks that showcase the state's rich cultural heritage and biodiversity.</p>
            </div>
            </div>
        );
    }
}
class GoaInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Goa: Where Culture Meets Serenity</h2>
                <p>Goa, situated on the western coast of India, is a melting pot of cultures, renowned for its serene beaches, vibrant festivals, and rich heritage.</p>
                <h2 className="heading">Music and Dance of Goa</h2>
                <p>Goa's cultural landscape is enlivened by traditional music forms like Fugdi, Dekhnni, and Mando, accompanied by lively dance performances. Festivals like Sao Joao and Carnival are marked by colorful processions and rhythmic beats.</p>
                <h2 className="heading">Portuguese Influence: Cultural Fusion</h2>
                <p>Goa's history is deeply intertwined with Portuguese colonization, which has left a lasting impact on its architecture, cuisine, and traditions. The state's unique blend of Indian and Portuguese cultures is evident in its festivals, food, and lifestyle.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Goa is known for its vibrant festivals like Christmas, Easter, and Shigmo, which are celebrated with great zeal and enthusiasm. These celebrations reflect the state's multicultural ethos and spirit of inclusivity.</p>
                <h2 className="heading">Arts and Handicrafts</h2>
                <p>Goa's artistic heritage is showcased in its vibrant handicrafts, including terracotta pottery, brassware, and crochet work. The state's artisans are known for their skill and creativity, producing exquisite pieces that capture the essence of Goan culture.</p>
                <h2 className="heading">Capital City: Panaji</h2>
                <p>Panaji, the capital city, serves as the cultural and administrative center of Goa. The historic churches of Old Goa and the vibrant markets of Panaji are notable landmarks that reflect the state's rich cultural heritage and architectural splendor.</p>
            </div>
            </div>
        );
    }
}
class GujaratInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Gujarat: Land of Vibrant Culture</h2>
                <p>Gujarat, situated in western India, is celebrated for its vibrant culture, rich history, and diverse traditions.</p>
                <h2 className="heading">Music and Dance of Gujarat</h2>
                <p>Gujarat's cultural landscape is adorned with traditional music forms like Garba, Dandiya Raas, and Bhavai, accompanied by colorful dance performances. Festivals like Navratri are marked by spirited dances and devotional songs.</p>
                <h2 className="heading">Historical Heritage: Architectural Marvels</h2>
                <p>Gujarat boasts a rich historical heritage, evident in its architectural marvels like the Sun Temple in Modhera, the Rani ki Vav stepwell in Patan, and the historic city of Ahmedabad. These landmarks showcase the state's architectural prowess and cultural grandeur.</p>
                <h2 className="heading">Festivals and Traditions</h2>
                <p>Gujarat is renowned for its vibrant festivals like Navratri, Diwali, and Uttarayan, which are celebrated with great fervor and enthusiasm. These festivals bring communities together in joyous celebrations filled with music, dance, and traditional rituals.</p>
                <h2 className="heading">Handicrafts and Textiles</h2>
                <p>Gujarat's artistic heritage is reflected in its exquisite handicrafts, including Bandhani textiles, Patola sarees, and Kutch embroidery. The state's artisans are known for their intricate craftsmanship and vibrant designs, making Gujarat a hub of artistic creativity.</p>
                <h2 className="heading">Capital City: Gandhinagar</h2>
                <p>Gandhinagar, the capital city, serves as the cultural and administrative center of Gujarat. The Akshardham Temple and Sabarmati Ashram are prominent landmarks that embody the state's spiritual and cultural legacy.</p>
            </div>
            </div>
        );
    }
}
class HaryanaInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Haryana: Land of Rich Heritage</h2>
                <p>Haryana, located in northern India, is renowned for its rich cultural heritage, vibrant festivals, and martial traditions.</p>
                <h2 className="heading">Music and Dance of Haryana</h2>
                <p>Haryana's cultural landscape is adorned with traditional music forms like Ragini, Ghoomar, and Holi songs, accompanied by lively dance performances. Festivals like Teej are marked by spirited dances and folk songs.</p>
                <h2 className="heading"> Martial Traditions: Valor and Courage</h2>
                <p>Haryana has a proud martial heritage, with its residents known for their valor and courage. Traditional sports like wrestling (kushti) and kabaddi are deeply ingrained in the state's cultural fabric, showcasing the spirit of sportsmanship and strength.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Haryana celebrates a plethora of festivals like Baisakhi, Diwali, and Holi, which are marked by colorful processions, cultural performances, and traditional rituals. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Handicrafts and Cuisine</h2>
                <p>Haryana's artistic heritage is reflected in its exquisite handicrafts, including Phulkari embroidery, pottery, and woodwork. The state's cuisine, with its robust flavors and hearty meals, adds to its cultural richness, featuring delicacies like bajra roti, sarson ka saag, and kadhi pakora.</p>
                <h2 className="heading">Capital City: Chandigarh</h2>
                <p>Chandigarh, the capital city shared with Punjab, serves as the cultural and administrative center of Haryana. The Rock Garden and Sukhna Lake are prominent landmarks that reflect the state's artistic and natural beauty.</p>
            </div>
            </div>
        );
    }
}

class HimachalPradeshInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Himachal Pradesh: Abode of Tranquility</h2>
                <p>Himachal Pradesh, nestled in the lap of the Himalayas, is celebrated for its serene landscapes, vibrant culture, and spiritual heritage.</p>
                <h2 className="heading">Music and Dance of Himachal Pradesh</h2>
                <p>Himachal Pradesh's cultural tapestry is adorned with traditional music forms like Chamba and Kulluvi, accompanied by graceful dance performances. Festivals like Dussehra are marked by colorful processions and devotional songs.</p>
                <h2 className="heading">Spiritual Legacy: Temples and Monasteries</h2>
                <p>Himachal Pradesh is home to numerous temples and monasteries, each with its unique architecture and spiritual significance. Landmarks like the Hidimba Devi Temple in Manali and the Key Monastery in Spiti reflect the state's rich religious heritage.</p>
                <h2 className="heading">Festivals and Traditions</h2>
                <p>Himachal Pradesh celebrates a plethora of festivals like Lohri, Baisakhi, and Shivratri, which are marked by vibrant celebrations and traditional rituals. These festivals showcase the state's cultural diversity and community spirit.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Himachal Pradesh's artistic heritage is reflected in its exquisite handicrafts, including Pahari painting, wood carving, and woolen textiles. The state's artisans are known for their skill and creativity, producing masterpieces that capture the essence of Himachali culture.</p>
                <h2 className="heading">Capital City: Shimla</h2>
                <p>Shimla, the erstwhile summer capital of British India, serves as the cultural and administrative center of Himachal Pradesh. The Viceregal Lodge and Mall Road are prominent landmarks that reflect the state's colonial legacy and natural beauty.</p>
            </div>
            </div>
        );
    }
}

class JharkhandInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
               <h2 className="heading">Jharkhand: Land of Natural Beauty</h2>
                <p>Jharkhand, located in eastern India, is celebrated for its natural beauty, rich tribal culture, and diverse traditions.</p>
                <h2 className="heading">Music and Dance of Jharkhand</h2>
                <p>Jharkhand's cultural landscape is adorned with traditional music forms like Fagua and Domkach, accompanied by lively dance performances. Festivals like Sarhul are marked by spirited dances and folk songs.</p>
                <h2 className="heading">Tribal Traditions: Cultural Heritage</h2>
                <p>Jharkhand is home to numerous indigenous tribes, each with its unique customs, rituals, and lifestyle. From the Santhals to the Mundas, the state showcases a rich tapestry of tribal cultures.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Jharkhand celebrates a plethora of festivals like Karma, Sohrai, and Tusu, which are marked by vibrant celebrations and traditional rituals. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Jharkhand's artistic heritage is reflected in its exquisite handicrafts, including bamboo works, dokra art, and tribal jewelry. The state's artisans are known for their skill and creativity, producing masterpieces that capture the essence of Jharkhandi culture.</p>
                <h2 className="heading">Capital City: Ranchi</h2>
                <p>Ranchi, the capital city, serves as the cultural and administrative center of Jharkhand. The Tribal Research Institute and Hundru Falls are prominent landmarks that reflect the state's tribal heritage and natural splendor.</p>
            </div>
            </div>
        );
    }
}

class KarnatakaInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Karnataka: Land of Heritage and Diversity</h2>
                <p>Karnataka, situated in southern India, is celebrated for its rich cultural heritage, diverse traditions, and historical landmarks.</p>
                <h2 className="heading">Music and Dance of Karnataka</h2>
                <p>Karnataka's cultural landscape is adorned with traditional music forms like Carnatic music and Yakshagana, accompanied by graceful dance performances. Festivals like Dasara are marked by colorful processions and classical music concerts.</p>
                <h2 className="heading">Historical Legacy: Architectural Marvels</h2>
                <p>Karnataka boasts a rich historical legacy, evident in its architectural marvels like the Hampi ruins, Belur-Halebid temples, and Mysore Palace. These landmarks showcase the state's architectural prowess and cultural grandeur.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Karnataka celebrates a plethora of festivals like Ugadi, Makar Sankranti, and Ganesh Chaturthi, which are marked by vibrant celebrations and traditional rituals. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Karnataka's artistic heritage is reflected in its exquisite handicrafts, including Mysore silk sarees, sandalwood carvings, and Bidriware. The state's artisans are known for their skill and creativity, producing masterpieces that capture the essence of Karnataka's culture.</p>
                <h2 className="heading">Capital City: Bengaluru</h2>
                <p>Bengaluru, the capital city, serves as the cultural and economic hub of Karnataka. The Vidhana Soudha and Lalbagh Botanical Garden are prominent landmarks that reflect the state's modernity and natural beauty.</p>
            </div>
            </div>
        );
    }
}

class KeralaInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                 <h2 className="heading">Kerala: God's Own Country</h2>
                <p>Kerala, located in the southwestern part of India, is renowned for its natural beauty, rich cultural heritage, and vibrant traditions.</p>
                <h2 className="heading">Music and Dance of Kerala</h2>
                <p>Kerala's cultural landscape is adorned with traditional music forms like Carnatic music and Kerala's own classical dance form, Kathakali, accompanied by graceful performances. Festivals like Onam are marked by colorful processions and cultural events.</p>
                <h2 className="heading">Backwaters and Beaches: Natural Splendor</h2>
                <p>Kerala is famous for its backwaters, serene lakes, and pristine beaches, which attract tourists from around the world. The tranquil backwaters of Alleppey and the golden sands of Kovalam are iconic symbols of Kerala's natural beauty.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Kerala celebrates a myriad of festivals like Vishu, Thrissur Pooram, and Theyyam, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals showcase the state's cultural diversity and religious harmony.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Kerala's artistic heritage is reflected in its exquisite handicrafts, including coconut shell carvings, wood carvings, and mural paintings. The state's artisans are known for their skill and craftsmanship, producing masterpieces that capture the essence of Kerala's culture.</p>
                <h2 className="heading">Capital City: Thiruvananthapuram</h2>
                <p>Thiruvananthapuram, the capital city, serves as the cultural and administrative center of Kerala. The Padmanabhaswamy Temple and Napier Museum are prominent landmarks that reflect the state's religious significance and artistic heritage.</p>
            </div>
            </div>
        );
    }
}

class MaharashtraInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Maharashtra: Land of Diversity and Dynamism</h2>
                <p>Maharashtra, located in western India, is celebrated for its rich cultural heritage, diverse traditions, and dynamic spirit.</p>
                <h2 className="heading">Music and Dance of Maharashtra</h2>
                <p>Maharashtra's cultural landscape is adorned with traditional music forms like Lavani, Powada, and Bhavageet, accompanied by vibrant dance performances. Festivals like Ganesh Chaturthi are marked by colorful processions and cultural events.</p>
                <h2 className="heading">Historical Legacy: Architectural Marvels</h2>
                <p>Maharashtra boasts a rich historical legacy, evident in its architectural marvels like the Ajanta and Ellora Caves, Elephanta Caves, and forts like Raigad and Pratapgad. These landmarks showcase the state's rich heritage and architectural prowess.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Maharashtra celebrates a myriad of festivals like Diwali, Gudi Padwa, and Makar Sankranti, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Maharashtra's artistic heritage is reflected in its exquisite handicrafts, including Paithani sarees, Warli paintings, and Bidriware. The state's artisans are known for their skill and creativity, producing masterpieces that capture the essence of Maharashtra's culture.</p>
                <h2 className="heading">Capital City: Mumbai</h2>
                <p>Mumbai, the capital city and financial capital of India, serves as the cultural and economic hub of Maharashtra. Landmarks like the Gateway of India and Chhatrapati Shivaji Maharaj Terminus are iconic symbols of Mumbai's cosmopolitanism and historical significance.</p>
            </div>
            </div>
        );
    }
}
class ManipurInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                 <h2 className="heading">Manipur: Jewel of the Northeast</h2>
                <p>Manipur, nestled in the northeastern part of India, is celebrated for its rich cultural heritage, vibrant traditions, and breathtaking landscapes.</p>
                <h2 className="heading">Music and Dance of Manipur</h2>
                <p>Manipur's cultural landscape is adorned with traditional music forms like Pung Cholom, Nata Sankirtana, and Khongjom Parba, accompanied by graceful dance performances. Festivals like Lai Haraoba are marked by colorful processions and cultural events.</p>
                <h2 className="heading">Traditional Sports: Martial Arts and Archery</h2>
                <p>Manipur has a proud tradition of martial arts like Thang-Ta and Sarit Sarak, as well as indigenous sports like Sagol Kangjei (Manipuri polo) and Yubi Lakpi (coconut game). These traditional sports showcase the state's spirit of sportsmanship and valor.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Manipur celebrates a myriad of festivals like Yaoshang, Kang, and Cheiraoba, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Manipur's artistic heritage is reflected in its exquisite handicrafts, including Manipuri pottery, weaving, and handloom products like phanek and sarong. The state's artisans are known for their skill and creativity, producing masterpieces that capture the essence of Manipuri culture.</p>
                <h2 className="heading">Capital City: Imphal</h2>
                <p>Imphal, the capital city, serves as the cultural and administrative center of Manipur. The Kangla Fort and Loktak Lake are prominent landmarks that reflect the state's historical significance and natural beauty.</p>
            </div>
            </div>
        );
    }
}

class MeghalayaInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Meghalaya: Abode of Clouds</h2>
                <p>Meghalaya, located in northeastern India, is celebrated for its pristine natural beauty, rich cultural heritage, and vibrant traditions.</p>
                <h2 className="heading">Music and Dance of Meghalaya</h2>
                <p>Meghalaya's cultural landscape is adorned with traditional music forms like Wangala and Shad Suk Mynsiem, accompanied by graceful dance performances. Festivals like Behdienkhlam are marked by colorful processions and cultural events.</p>
                <h2 className="heading">Living Root Bridges: Natural Wonders</h2>
                <p>Meghalaya is famous for its living root bridges, unique natural wonders crafted by the Khasi and Jaintia tribes using the roots of rubber trees. These bridges are iconic symbols of Meghalaya's ingenuity and harmonious coexistence with nature.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Meghalaya celebrates a myriad of festivals like Nongkrem, Shillong Autumn Festival, and Wangala, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Meghalaya's artistic heritage is reflected in its exquisite handicrafts, including bamboo and cane products, handwoven textiles, and traditional Khasi jewelry. The state's artisans are known for their skill and craftsmanship, producing masterpieces that capture the essence of Meghalayan culture.</p>
                <h2 className="heading">Capital City: Shillong</h2>
                <p>Shillong, the capital city, serves as the cultural and administrative center of Meghalaya. The Ward's Lake and Shillong Peak are prominent landmarks that reflect the state's natural beauty and scenic vistas.</p>
            </div>
            </div>
        );
    }
}
class MizoramInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Mizoram: Land of Rolling Hills</h2>
                <p>Mizoram, located in northeastern India, is celebrated for its picturesque landscapes, rich cultural heritage, and vibrant traditions.</p>
                <h2 className="heading">Music and Dance of Mizoram</h2>
                <p>Mizoram's cultural landscape is adorned with traditional music forms like Cheraw and Chheihlam, accompanied by graceful dance performances. Festivals like Chapchar Kut are marked by colorful processions and cultural events.</p>
                <h2 className="heading">Tribal Traditions: Cultural Legacy</h2>
                <p>Mizoram is home to numerous indigenous tribes, each with its unique customs, rituals, and lifestyle. From the Mizo to the Hmar tribes, the state showcases a rich tapestry of tribal cultures.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Mizoram celebrates a myriad of festivals like Mim Kut, Pawl Kut, and Thalfavang Kut, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Mizoram's artistic heritage is reflected in its exquisite handicrafts, including bamboo and cane products, handwoven textiles, and traditional Mizo shawls. The state's artisans are known for their skill and craftsmanship, producing masterpieces that capture the essence of Mizoram's culture.</p>
                <h2 className="heading">Capital City: Aizawl</h2>
                <p>Aizawl, the capital city, serves as the cultural and administrative center of Mizoram. The Durtlang Hills and Solomon's Temple are prominent landmarks that reflect the state's natural beauty and religious significance.</p>
            </div>
            </div>
        );
    }
}

class MadhyaPradeshInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Madhya Pradesh: The Heart of India</h2>
                <p>Madhya Pradesh, located in central India, is celebrated for its rich cultural heritage, diverse traditions, and historical landmarks.</p>
                <h2 className="heading">Music and Dance of Madhya Pradesh</h2>
                <p>Madhya Pradesh's cultural landscape is adorned with traditional music forms like Malwa folk music and Tertali, accompanied by graceful dance performances. Festivals like Khajuraho Dance Festival are marked by colorful performances and cultural events.</p>
                <h2 className="heading">Historical Legacy: Architectural Marvels</h2>
                <p>Madhya Pradesh boasts a rich historical legacy, evident in its architectural marvels like the Khajuraho Group of Monuments, Sanchi Stupa, and Gwalior Fort. These landmarks showcase the state's architectural prowess and cultural grandeur.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Madhya Pradesh celebrates a myriad of festivals like Diwali, Holi, and Navratri, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Madhya Pradesh's artistic heritage is reflected in its exquisite handicrafts, including Chanderi sarees, Maheshwari textiles, and Gond art. The state's artisans are known for their skill and creativity, producing masterpieces that capture the essence of Madhya Pradesh's culture.</p>
                <h2 className="heading">Capital City: Bhopal</h2>
                <p>Bhopal, the capital city, serves as the cultural and administrative center of Madhya Pradesh. The Upper Lake and Taj-ul-Masajid are prominent landmarks that reflect the state's natural beauty and architectural splendor.</p>
            </div>
            </div>
        );
    }
}

class NagalandInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Nagaland: Land of Festivals</h2>
                <p>Nagaland, located in northeastern India, is celebrated for its rich cultural heritage, vibrant traditions, and colorful festivals.</p>
                <h2 className="heading">Music and Dance of Nagaland</h2>
                <p>Nagaland's cultural landscape is adorned with traditional music forms like Naga folk songs and tribal chants, accompanied by energetic dance performances. Festivals like Hornbill Festival are marked by colorful processions and cultural events.</p>
                <h2 className="heading">Tribal Traditions: Cultural Legacy</h2>
                <p>Nagaland is home to numerous indigenous tribes, each with its unique customs, rituals, and lifestyle. From the Ao to the Konyak tribes, the state showcases a rich tapestry of tribal cultures.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Nagaland celebrates a myriad of festivals like Moatsu, Sekrenyi, and Tuluni, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Nagaland's artistic heritage is reflected in its exquisite handicrafts, including Naga shawls, bamboo artifacts, and traditional Naga jewelry. The state's artisans are known for their skill and craftsmanship, producing masterpieces that capture the essence of Nagaland's culture.</p>
                <h2 className="heading">Capital City: Kohima</h2>
                <p>Kohima, the capital city, serves as the cultural and administrative center of Nagaland. The Kohima War Cemetery and Naga Heritage Village are prominent landmarks that reflect the state's historical significance and cultural richness.</p>
            </div>
            </div>
        );
    }
}

class OdishaInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Odisha: Land of Temples and Traditions</h2>
                <p>Odisha, located in eastern India, is celebrated for its rich cultural heritage, architectural marvels, and vibrant traditions.</p>
                <h2 className="heading">Music and Dance of Odisha</h2>
                <p>Odisha's cultural landscape is adorned with traditional music forms like Odissi music and folk songs, accompanied by graceful dance performances. Festivals like Raja Parba are marked by colorful processions and cultural events.</p>
                <h2 className="heading">Historical Legacy: Architectural Marvels</h2>
                <p>Odisha boasts a rich historical legacy, evident in its architectural marvels like the Konark Sun Temple, Jagannath Temple in Puri, and Lingaraja Temple in Bhubaneswar. These landmarks showcase the state's architectural prowess and cultural grandeur.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Odisha celebrates a myriad of festivals like Rath Yatra, Durga Puja, and Ratha Saptami, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Odisha's artistic heritage is reflected in its exquisite handicrafts, including Pattachitra paintings, stone carvings, and applique work. The state's artisans are known for their skill and craftsmanship, producing masterpieces that capture the essence of Odisha's culture.</p>
                <h2 className="heading">Capital City: Bhubaneswar</h2>
                <p>Bhubaneswar, the capital city, serves as the cultural and administrative center of Odisha. The Lingaraja Temple and Udayagiri and Khandagiri Caves are prominent landmarks that reflect the state's religious significance and architectural splendor.</p>
            </div>
            </div>
        );
    }
}

class PunjabInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Punjab: Land of Five Rivers</h2>
                <p>Punjab, located in northern India, is celebrated for its rich cultural heritage, vibrant traditions, and agricultural prosperity.</p>
                <h2 className="heading">Music and Dance of Punjab</h2>
                <p>Punjab's cultural landscape is adorned with traditional music forms like Bhangra and Giddha, accompanied by lively dance performances. Festivals like Baisakhi are marked by colorful processions and cultural events.</p>
                <h2 className="heading">Agricultural Heartland: Prosperity and Granary</h2>
                <p>Punjab is known as the "Granary of India" due to its fertile agricultural lands and high crop yields. The state's agricultural prosperity is reflected in its lush green fields of wheat, rice, and mustard.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Punjab celebrates a myriad of festivals like Lohri, Diwali, and Gurpurab, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Punjab's artistic heritage is reflected in its exquisite handicrafts, including Phulkari embroidery, Punjabi juttis, and woodwork. The state's artisans are known for their skill and creativity, producing masterpieces that capture the essence of Punjab's culture.</p>
                <h2 className="heading">Capital City: Chandigarh</h2>
                <p>Chandigarh, the capital city, serves as the cultural and administrative center of Punjab. The Rock Garden and Sukhna Lake are prominent landmarks that reflect the state's modernity and natural beauty.</p>
            </div>
            </div>
        );
    }
}

class RajasthanInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                 <h2 className="heading">Rajasthan: Land of Kings</h2>
                <p>Rajasthan, located in northwestern India, is celebrated for its rich cultural heritage, majestic forts, and vibrant traditions.</p>
                <h2 className="heading">Music and Dance of Rajasthan</h2>
                <p>Rajasthan's cultural landscape is adorned with traditional music forms like Ghoomar and Kalbelia, accompanied by colorful dance performances. Festivals like Pushkar Camel Fair are marked by vibrant processions and cultural events.</p>
                <h2 className="heading">Historical Legacy: Majestic Forts</h2>
                <p>Rajasthan boasts a rich historical legacy, evident in its majestic forts like Amber Fort, Mehrangarh Fort, and Jaipur City Palace. These landmarks showcase the state's royal heritage and architectural grandeur.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Rajasthan celebrates a myriad of festivals like Diwali, Holi, and Teej, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Rajasthan's artistic heritage is reflected in its exquisite handicrafts, including Bandhani textiles, Meenakari jewelry, and blue pottery. The state's artisans are known for their skill and craftsmanship, producing masterpieces that capture the essence of Rajasthan's culture.</p>
                <h2 className="heading">Capital City: Jaipur</h2>
                <p>Jaipur, the capital city, serves as the cultural and administrative center of Rajasthan. The Hawa Mahal and Jantar Mantar are prominent landmarks that reflect the state's architectural splendor and historical significance.</p>
            </div>
            </div>
        );
    }
}

class SikkimInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Sikkim: Land of Mystical Beauty</h2>
                <p>Sikkim, nestled in the northeastern part of India, is celebrated for its pristine natural beauty, rich cultural heritage, and vibrant traditions.</p>
                <h2 className="heading">Music and Dance of Sikkim</h2>
                <p>Sikkim's cultural landscape is adorned with traditional music forms like Tamang Selo and Bhutia folk songs, accompanied by graceful dance performances. Festivals like Losar are marked by colorful processions and cultural events.</p>
                <h2 className="heading">Ecological Paradise: Himalayan Splendor</h2>
                <p>Sikkim is known for its breathtaking landscapes, including snow-capped mountains, lush green valleys, and serene lakes. The state's ecological diversity and pristine beauty attract tourists from around the world.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Sikkim celebrates a myriad of festivals like Losar, Saga Dawa, and Tihar, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Sikkim's artistic heritage is reflected in its exquisite handicrafts, including Thangka paintings, handwoven carpets, and traditional Sikkimese attire. The state's artisans are known for their skill and creativity, producing masterpieces that capture the essence of Sikkim's culture.</p>
                <h2 className="heading">Capital City: Gangtok</h2>
                <p>Gangtok, the capital city, serves as the cultural and administrative center of Sikkim. The Rumtek Monastery and Tsomgo Lake are prominent landmarks that reflect the state's spiritual significance and natural beauty.</p>
            </div>
            </div>
        );
    }
}

class TamilNaduInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Tamil Nadu: Land of Temples and Traditions</h2>
                <p>Tamil Nadu, located in southern India, is celebrated for its rich cultural heritage, ancient temples, and vibrant traditions.</p>
                <h2 className="heading">Music and Dance of Tamil Nadu</h2>
                <p>Tamil Nadu's cultural landscape is adorned with traditional music forms like Carnatic music and Bharatanatyam, accompanied by graceful dance performances. Festivals like Pongal are marked by colorful processions and cultural events.</p>
                <h2 className="heading">Ancient Temples: Architectural Marvels</h2>
                <p>Tamil Nadu boasts a rich heritage of ancient temples, including the Brihadeeswarar Temple, Meenakshi Temple, and Ramanathaswamy Temple. These architectural marvels showcase the state's religious significance and cultural grandeur.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Tamil Nadu celebrates a myriad of festivals like Diwali, Navratri, and Tamil New Year, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Tamil Nadu's artistic heritage is reflected in its exquisite handicrafts, including Tanjore paintings, Chettinad sarees, and Kanchipuram silk sarees. The state's artisans are known for their skill and craftsmanship, producing masterpieces that capture the essence of Tamil Nadu's culture.</p>
                <h2 className="heading">Capital City: Chennai</h2>
                <p>Chennai, the capital city, serves as the cultural and administrative center of Tamil Nadu. The Marina Beach and Kapaleeshwarar Temple are prominent landmarks that reflect the state's modernity and religious fervor.</p>
            </div>
            </div>
        );
    }
}

class TelanganaInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Telangana: Land of Rich Heritage</h2>
                <p>Telangana, located in southern India, is celebrated for its rich cultural heritage, historical monuments, and vibrant traditions.</p>
                <h2 className="heading">Music and Dance of Telangana</h2>
                <p>Telangana's cultural landscape is adorned with traditional music forms like Perini Sivatandavam and Bathukamma songs, accompanied by graceful dance performances. Festivals like Bonalu are marked by colorful processions and cultural events.</p>
                <h2 className="heading">Historical Monuments: Architectural Marvels</h2>
                <p>Telangana boasts a rich heritage of historical monuments, including the Golconda Fort, Charminar, and Qutb Shahi Tombs. These architectural marvels showcase the state's historical significance and cultural grandeur.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Telangana celebrates a myriad of festivals like Ugadi, Dasara, and Bathukamma, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Telangana's artistic heritage is reflected in its exquisite handicrafts, including Pochampally sarees, Bidriware, and Nirmal paintings. The state's artisans are known for their skill and craftsmanship, producing masterpieces that capture the essence of Telangana's culture.</p>
                <h2 className="heading">Capital City: Hyderabad</h2>
                <p>Hyderabad, the capital city, serves as the cultural and administrative center of Telangana. The Hussain Sagar Lake and Ramoji Film City are prominent landmarks that reflect the state's modernity and natural beauty.</p>
            </div>
            </div>
        );
    }
}


class TripuraInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
               <h2 className="heading">Tripura: Land of Cultural Diversity</h2>
                <p>Tripura, located in northeastern India, is celebrated for its rich cultural heritage, diverse ethnic groups, and vibrant traditions.</p>
                <h2 className="heading">Music and Dance of Tripura</h2>
                <p>Tripura's cultural landscape is adorned with traditional music forms like Garia and Hojagiri, accompanied by graceful dance performances. Festivals like Kharchi Puja are marked by colorful processions and cultural events.</p>
                <h2 className="heading">Indigenous Tribes: Cultural Legacy</h2>
                <p>Tripura is home to numerous indigenous tribes, each with its unique customs, rituals, and lifestyle. From the Tripuri to the Reang tribes, the state showcases a rich tapestry of tribal cultures.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Tripura celebrates a myriad of festivals like Durga Puja, Diwali, and Bihu, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Tripura's artistic heritage is reflected in its exquisite handicrafts, including bamboo and cane products, handwoven textiles, and traditional tribal jewelry. The state's artisans are known for their skill and creativity, producing masterpieces that capture the essence of Tripura's culture.</p>
                <h2 className="heading">Capital City: Agartala</h2>
                <p>Agartala, the capital city, serves as the cultural and administrative center of Tripura. The Ujjayanta Palace and Neermahal Palace are prominent landmarks that reflect the state's historical significance and architectural splendor.</p>
            </div>
            </div>
        );
    }
}

class UttarPradeshInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                 <h2 className="heading">Uttar Pradesh: Land of Heritage and Diversity</h2>
                <p>Uttar Pradesh, located in northern India, is celebrated for its rich cultural heritage, historical monuments, and diverse traditions.</p>
                <h2 className="heading">Music and Dance of Uttar Pradesh</h2>
                <p>Uttar Pradesh's cultural landscape is adorned with traditional music forms like Hindustani classical music and Kathak dance, accompanied by graceful performances. Festivals like Holi and Diwali are marked by colorful processions and cultural events.</p>
                <h2 className="heading">Historical Monuments: Architectural Marvels</h2>
                <p>Uttar Pradesh boasts a rich heritage of historical monuments, including the Taj Mahal, Agra Fort, and Fatehpur Sikri. These architectural marvels showcase the state's historical significance and cultural grandeur.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Uttar Pradesh celebrates a myriad of festivals like Kumbh Mela, Navratri, and Eid, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Uttar Pradesh's artistic heritage is reflected in its exquisite handicrafts, including chikankari embroidery, zardozi work, and brassware. The state's artisans are known for their skill and craftsmanship, producing masterpieces that capture the essence of Uttar Pradesh's culture.</p>
                <h2 className="heading">Capital City: Lucknow</h2>
                <p>Lucknow, the capital city, serves as the cultural and administrative center of Uttar Pradesh. The Bara Imambara and Rumi Darwaza are prominent landmarks that reflect the state's architectural splendor and historical significance.</p>
            </div>
            </div>
        );
    }
}

class UttarakhandInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">Uttarakhand: Land of Spiritual Bliss</h2>
                <p>Uttarakhand, nestled in the lap of the Himalayas, is celebrated for its pristine natural beauty, spiritual significance, and vibrant culture.</p>
                <h2 className="heading">Music and Dance of Uttarakhand</h2>
                <p>Uttarakhand's cultural landscape is adorned with traditional music forms like Kumaoni and Garhwali folk music, accompanied by graceful dance performances. Festivals like Nanda Devi Raj Jat Yatra are marked by colorful processions and cultural events.</p>
                <h2 className="heading">Spiritual Heritage: Sacred Sites</h2>
                <p>Uttarakhand is home to numerous sacred sites, including the Char Dham pilgrimage circuit, Haridwar, and Rishikesh. These spiritual destinations attract devotees from around the world and reflect the state's spiritual heritage.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>Uttarakhand celebrates a myriad of festivals like Makar Sankranti, Basant Panchami, and Holi, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>Uttarakhand's artistic heritage is reflected in its exquisite handicrafts, including Pahari paintings, wood carvings, and woolen shawls. The state's artisans are known for their skill and craftsmanship, producing masterpieces that capture the essence of Uttarakhand's culture.</p>
                <h2 className="heading">Capital City: Dehradun</h2>
                <p>Dehradun, the capital city, serves as the cultural and administrative center of Uttarakhand. The Robber's Cave and Tapkeshwar Temple are prominent landmarks that reflect the state's natural beauty and spiritual essence.</p>
            </div>
            </div>
        );
    }
}

class WestBengalInfo extends React.Component {
    render() {
        return (
            <div className="info-container">
            <div className="text-container" style={{ fontSize: '15px' ,textAlign: 'justify' }}>
                <h2 className="heading">West Bengal: Land of Culture and Diversity</h2>
                <p>West Bengal, located in eastern India, is celebrated for its rich cultural heritage, literary prowess, and vibrant traditions.</p>
                <h2 className="heading">Music and Dance of West Bengal</h2>
                <p>West Bengal's cultural landscape is adorned with traditional music forms like Rabindra Sangeet and Baul music, accompanied by graceful dance performances like Manipuri and Kathak. Festivals like Durga Puja are marked by colorful processions and cultural events.</p>
                <h2 className="heading">Literary Legacy: Poetic Excellence</h2>
                <p>West Bengal boasts a rich literary legacy, with luminaries like Rabindranath Tagore, Bankim Chandra Chattopadhyay, and Sarat Chandra Chattopadhyay. Their works have left an indelible mark on Indian literature and continue to inspire generations.</p>
                <h2 className="heading">Festivals and Celebrations</h2>
                <p>West Bengal celebrates a myriad of festivals like Durga Puja, Diwali, and Poila Boishakh, which are marked by vibrant celebrations, traditional rituals, and cultural performances. These festivals bring communities together in joyous celebrations and reinforce the state's cultural bonds.</p>
                <h2 className="heading">Arts and Crafts</h2>
                <p>West Bengal's artistic heritage is reflected in its exquisite handicrafts, including terracotta, kantha embroidery, and dokra metal craft. The state's artisans are known for their skill and craftsmanship, producing masterpieces that capture the essence of West Bengal's culture.</p>
                <h2 className="heading">Capital City: Kolkata</h2>
                <p>Kolkata, the capital city, serves as the cultural and administrative center of West Bengal. The Victoria Memorial and Howrah Bridge are prominent landmarks that reflect the state's historical significance and architectural splendor.</p>
            </div>
            </div>
        );
    }
}

class State extends React.Component {
    constructor() {
        super();
        this.state = {
            showSubmenus: false,
            selectedStateImage: null,
            displayAndhraInfo: false,
        };
        this.sid = getSession("sid");
        if (this.sid === "") {
            window.location.replace("/");
        }

        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid: this.sid
        });
        callApi("POST", url, data, this.loadUname, errorResponse);
    }

    loadUname(res) {
        var data = JSON.parse(res);
        var HL1 = document.getElementById("HL1");
        if (HL1) {
            HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
        } else {
            console.error("Element with id 'HL1' not found in the DOM.");
        }
    }

    toggleSubmenus = () => {
        this.setState((prevState) => ({
            showSubmenus: !prevState.showSubmenus,
        }));
    };

    handleStateClick = (state) => {
        switch (state) {
            case "Andhra Pradesh":
                this.setState({ selectedStateImage: andhraPradesh, displayAndhraInfo: true,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Arunachal Pradesh":
                this.setState({ selectedStateImage: arunachalPradesh, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo:true , displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Assam":
                this.setState({ selectedStateImage: assam, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: true,displayChhattisgarhInfo: false  });;
                break;
            case "Bihar":
                this.setState({ selectedStateImage: bihar, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: true,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Chhattisgarh":
                this.setState({ selectedStateImage: chhattisgarh, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: true });;
                break;
                
            case "Goa":
                this.setState({ selectedStateImage: goa, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: true, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            
            case "Gujarat":
                this.setState({ selectedStateImage: gujarat, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: true, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Haryana":
                this.setState({ selectedStateImage: haryana, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: true, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Himachal Pradesh":
                this.setState({ selectedStateImage: hima, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: true, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Jharkhand":
                this.setState({ selectedStateImage: jhar, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: true, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Karnataka":
                this.setState({ selectedStateImage: Karnataka, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: true, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Kerala":
                this.setState({ selectedStateImage: kerala, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: true, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Madhya Pradesh":
                this.setState({ selectedStateImage: mp, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: true, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Maharashtra":
                this.setState({ selectedStateImage: maha, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: true,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Manipur":
                this.setState({ selectedStateImage: mani, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: true,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Meghalaya":
                this.setState({ selectedStateImage: megha, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: true, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Mizoram":
                this.setState({ selectedStateImage: mizo, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: true, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Nagaland":
                this.setState({ selectedStateImage: nagaland, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: true, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Odisha":
                this.setState({ selectedStateImage: odisha, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: true,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Punjab":
                this.setState({ selectedStateImage: punjab, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo:true,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Rajasthan":
                this.setState({ selectedStateImage: raj, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: true, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Sikkim":
                this.setState({ selectedStateImage: sikkim, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: true,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Tamil Nadu":
                this.setState({ selectedStateImage: tamil, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:true, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Telangana":
                this.setState({ selectedStateImage: telangana, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: true, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Tripura":
                this.setState({ selectedStateImage: tripura, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: true, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "UttarPradesh":
                this.setState({ selectedStateImage: up, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: false, displayUttarPradeshInfo: true,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "Uttarakhand":
                this.setState({ selectedStateImage: uk, displayAndhraInfo: false,displayWestBengal: false, displayUttarakhandInfo: true, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;
            case "WestBengal":
                this.setState({ selectedStateImage: west, displayAndhraInfo: false,displayWestBengal: true, displayUttarakhandInfo: false, displayUttarPradeshInfo: false,  displayTripuraInfo: false, displayTelanganaInfo: false, displayTamilNaduInfo:false, displaySikkimInfo: false,displayRajasthanInfo: false, displayPunjabInfo: false,displayOdishaInfo: false,displayNagalandInfo: false, displayMadhyaPradeshInfo: false, displayMizoramInfo: false, displayMeghalayaInfo: false, displayManipurInfo: false,displayMaharashtraInfo: false,displayKeralaInfo: false, displayKarnatakaInfo: false, displayJharkhandInfo: false, displayHimachalPradeshInfo: false, displayHaryanaInfo: false, displayGujaratInfo: false, displayGoaInfo: false, displayArunachalInfo: false, displayBiharInfo: false,displayAssamInfo: false,displayChhattisgarhInfo: false  });;
                break;

            default:
                this.setState({ selectedStateImage: null, displayAndhraInfo: false, displayArunachalInfo: false, displayBiharInfo: false });
            
        }
    };

    logout() {
        setSession("sid", "", -1);
        window.location.replace("/");
    }

    renderStatesMenu() {
        const statesInIndia = [
            "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
            "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
            "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
            "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
        ];

        return (
            <div>
                <div className='menuheader' onClick={this.toggleSubmenus}>
                    <img src={menuicon} alt='' />
                    <label>VIEW STATES</label>

                </div>
                {this.state.showSubmenus && (
                    <ul className="mlist">
                        {statesInIndia.map((state, index) => (
                            <li key={index} onClick={() => this.handleStateClick(state)}>
                                <label>{state}</label>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }

    render() {
        const { selectedStateImage,
                displayAndhraInfo, 
                displayArunachalInfo,
                displayAssamInfo,
                 displayBiharInfo,
                 displayChhattisgarhInfo,
            displayGoaInfo,
            displayGujaratInfo,
            displayHaryanaInfo,
            displayHimachalPradeshInfo,
            displayJharkhandInfo,
            displayKarnatakaInfo,
            displayKeralaInfo,
            displayMaharashtraInfo,
            displayManipurInfo,
            displayMeghalayaInfo,
            displayMizoramInfo,
            displayMadhyaPradeshInfo,
            displayNagalandInfo,
            displayOdishaInfo,
            displayPunjabInfo,
            displayRajasthanInfo,
            displaySikkimInfo,
            displayTamilNaduInfo,
            displayTelanganaInfo,
            displayTripuraInfo,
            displayUttarPradeshInfo,
            displayUttarakhandInfo,
            displayWestBengalInfo
         } = this.state;
        return (
            <div className='full-height'>
            <div className='header1'>
            <label style={HS1}>INDIA | Culture Management System</label>
                <NavLink to="/home" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/states" className="nav-link">States in India</NavLink>
                <NavLink to="/traditions" className="nav-link">Traditions</NavLink>
                <NavLink to="/event" className="nav-link">Events</NavLink>
                <label style={HS2} onClick={this.logout}>Logout</label>
                <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
                <label id='HL1' style={HS4}></label>
                <div id="header1"></div>
            </div>
                <div className='content'>
                    <div className='menubar'>
                        <div className='menu'>
                            {this.renderStatesMenu()}
                        </div>
                    </div>
                    <div className='outlet'>
                    {selectedStateImage && (
                            <img src={selectedStateImage} alt={selectedStateImage} />
                        )}
                        {displayAndhraInfo && <AndhraPradeshInfo />}
                        {displayArunachalInfo && <ArunachalPradeshInfo />}
                        {displayAssamInfo && <AssamInfo />}
                        {displayBiharInfo && <BiharInfo />}
                        {displayChhattisgarhInfo && <ChhattisgarhInfo />}
                        {displayGoaInfo && <GoaInfo />}
                        {displayGujaratInfo && <GujaratInfo />} 
                        {displayHaryanaInfo && <HaryanaInfo />}
                        {displayHimachalPradeshInfo && <HimachalPradeshInfo />}
                        {displayJharkhandInfo && <JharkhandInfo />}
                        {displayKarnatakaInfo && <KarnatakaInfo />}
                        {displayKeralaInfo && <KeralaInfo />} 
                        {displayMaharashtraInfo && <MaharashtraInfo />} 
                        {displayManipurInfo && <ManipurInfo />} 
                        {displayMeghalayaInfo && <MeghalayaInfo />} 
                        {displayMizoramInfo && <MizoramInfo />} 
                        {displayMadhyaPradeshInfo && <MadhyaPradeshInfo />} 
                        {displayNagalandInfo && <NagalandInfo />} 
                        {displayOdishaInfo && <OdishaInfo />} 
                        {displayPunjabInfo && <PunjabInfo />} 
                        {displayRajasthanInfo && <RajasthanInfo />} 
                        {displaySikkimInfo && <SikkimInfo />} 
                        {displayTamilNaduInfo && <TamilNaduInfo />} 
                        {displayTelanganaInfo && <TelanganaInfo />} 
                        {displayTripuraInfo && <TripuraInfo />} 
                        {displayUttarPradeshInfo && <UttarPradeshInfo />} 
                        {displayUttarakhandInfo && <UttarakhandInfo />} 
                        {displayWestBengalInfo && <WestBengalInfo />} 


                    </div>
                </div>
                <div className='footer1'>
                    Copyright @ Indian Culture. All rights reserved.
                </div>
            </div>
        );
    }
}

export default State;
