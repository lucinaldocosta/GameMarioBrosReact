import "../Styles/HowToPlay.css";
import Spacebar from "../IMG/spacebar.png";
function HowToPlay() {
  return (
    <section className="howtoplay_section">
      <article className="howtoplay_article">
        <h2 className="howtoplay_title">How to Play: </h2>
        <div className="howtoplay_div_img">
          <img src={Spacebar} alt="spacebar photo" className="howtoplay_img" />
        </div>
        <p className="howtoplay_p">
          Here's a simple instruction for the obstacle avoiding game:
          <br /><br />
          The player controls a character that is running on a track with
          obstacles. 
          <br />
          The player's goal is to jump over the obstacles by pressing
          the spacebar. 
          <br />
          If the player fails to jump over an obstacle, the game
          ends. 
          <br />
          The further the player can get without colliding with any
          obstacles, the higher the score will be. 
          <br />
          The player can collect items
          along the track to increase the score or grant advantages, such as the
          ability to jump higher or slow down time. 
          <br />
          The game contains multiple
          levels, each with increasingly difficult obstacles. 
          <br />
          The player can
          compete against other players online to see who can get the highest
          score. 
          <br /><br />
          Good luck and have fun!
        </p>
      </article>
    </section>
  );
}
export default HowToPlay;
