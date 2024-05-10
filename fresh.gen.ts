// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $auth from "./routes/auth.tsx";
import * as $client_id_ from "./routes/client/[id].tsx";
import * as $client_home from "./routes/client/home.tsx";
import * as $client_new from "./routes/client/new.tsx";
import * as $index from "./routes/index.tsx";
import * as $ContactoEmail from "./islands/ContactoEmail.tsx";
import * as $NuevoCorreo from "./islands/NuevoCorreo.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/auth.tsx": $auth,
    "./routes/client/[id].tsx": $client_id_,
    "./routes/client/home.tsx": $client_home,
    "./routes/client/new.tsx": $client_new,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/ContactoEmail.tsx": $ContactoEmail,
    "./islands/NuevoCorreo.tsx": $NuevoCorreo,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;