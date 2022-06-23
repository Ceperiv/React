import './App.css';
import SimpsonComponents from "./components/SimpsonComponents";

function TheSimpsons() {
    return (
        <div className="wrap">
            <SimpsonComponents
                itemName={'Homer'}
                image={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
                info={'Homer Jay Simpson is the main protagonist of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. '}
                slogans={['D\'oh!',
                    'Woo-hoo!”',
                    'Mmm...']}

            />

            <SimpsonComponents
                itemName={'Marge'}
                image={'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}
                info={'Marjorie Jacqueline "Marge" Simpson is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. '}
                slogans={['It\'s true. Women aren\'t very good drivers',
                    '“Now it\'s Marge\'s time to shine!”',
                    '“Hrmmm….”']}
            />

            <SimpsonComponents
                itemName={'Bart'}
                image={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}
                info={'Bartholomew "Bart" Jojo Simpson (born April 1[7] or February 23[8]) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. '}
                slogans={['Ay Caramba!',
                    'Eat my shorts',
                    'I didn\'t do it!',
                    'Don\'t have a cow, man.',
                    'I\'m Bart Simpson, who the hell are you?']}
            />

            <SimpsonComponents
                itemName={'Lisa'}
                image={'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'}
                info={'Lisa Marie Simpson is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'}
                slogans={['Bart!',
                    'If anyone wants me, I\'ll be in my room.',
                    'BAAAAART!!',
                    'Shut up, Meg',
                    'I hope these are recyclable.',
                    'The truth must be told.']}
            />
                <SimpsonComponents
                    itemName={'Meggie'}
                    image={'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'}
                    info={'Margaret Evelyn[10] Lenny "Maggie" Simpson[11] (born January 12, 1989) is the 1-year old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons.'}
                    slogans={['Moe.',
                            'Daddy.',
                            'Daddily Doodily!',
                            'Rusty!']}
                />
        </div>
    );
}

export default TheSimpsons;
