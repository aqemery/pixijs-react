
import { useApp } from '@pixi/react';
import run from './pixi-example';

export default function PixiApp() {
  let app = useApp();
  app.stage.removeChildren();
  run(app);

  return (
    <></>
  );
}


