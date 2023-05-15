import { Container, Sprite, Texture} from 'pixi.js';
import reactLogo from './assets/react.svg'

export default function run(app) {
    const container = new Container();
    app.stage.addChild(container);

    // Create a new texture
    const texture = Texture.from(reactLogo);

    // Create a 5x5 grid of bunnies
    for (let i = 0; i < 25; i++) {
        const logo = new Sprite(texture);
        logo.anchor.set(0.5);
        logo.x = (i % 5) * 40;
        logo.y = Math.floor(i / 5) * 40;
        container.addChild(logo);
    }

    // Move container to the center
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;

    // Center logo sprite in local container coordinates
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

    // Listen for animate update
    app.ticker.add((delta) => {
        // rotate the container!
        // use delta to create frame-independent transform
        container.rotation -= 0.01 * delta;
    });
}
