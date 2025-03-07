# Changelog

## [1.8.0](https://github.com/JarodLMN/plugNmeet-client/compare/v1.7.0...v1.8.0) (2025-03-07)


### Features

* end-to-end encryption (E2EE) for chat + whiteboard ([cac75db](https://github.com/JarodLMN/plugNmeet-client/commit/cac75dbb2916215deeea4d14b47bb5d86a6d8492))
* extra_data option for user ([dd43d6f](https://github.com/JarodLMN/plugNmeet-client/commit/dd43d6f8777dca82939f0f147fe52997952c4a42))
* option to auto generate user_id ([33081c2](https://github.com/JarodLMN/plugNmeet-client/commit/33081c238abcb5be317e7e5068fefd1c2d0f68df))
* option to disable `virtual_bg` & `raise_hand` feature + `preferred_lang` option for user ([7f2898c](https://github.com/JarodLMN/plugNmeet-client/commit/7f2898c3b5362bc2e14d1d897052eab2f39f9847))
* option to disable virtual_bg & raise_hand feature + `preferred_lang` option for user ([caa10b2](https://github.com/JarodLMN/plugNmeet-client/commit/caa10b2ce22d2f6bce4ade496fee67c5bb54015b))
* option to encrypt chat messages ([a875b87](https://github.com/JarodLMN/plugNmeet-client/commit/a875b874bed66f94eaf1b3ab27a6702e7d71fdda))
* option to limit for selecting number of translation languages ([c517e93](https://github.com/JarodLMN/plugNmeet-client/commit/c517e930415f19614c4e42a3121f44d0a190d608))
* option to limit for selecting number of translation languages ([62d75d1](https://github.com/JarodLMN/plugNmeet-client/commit/62d75d1b83dc625144e8e45d98bd94a6f20d9791))
* option to set `max_size_whiteboard_file` ([1bf9339](https://github.com/JarodLMN/plugNmeet-client/commit/1bf933950b73394f89c730e7fa392f43135a365a))
* the ability to adjust the webcam's positioning according to the active speaker ([c6742cb](https://github.com/JarodLMN/plugNmeet-client/commit/c6742cbd5a372fca685f95dc2731fe9c273091a9))


### Bug Fixes

* **bug:** Ingress was not working in the new Nats solution. Ref: https://github.com/mynaparrot/plugNmeet-server/discussions/611 ([f3b8374](https://github.com/JarodLMN/plugNmeet-client/commit/f3b8374721e082f36ddd8f73c2636e14b7553079))
* **ci:** added beta release ([bc98ba9](https://github.com/JarodLMN/plugNmeet-client/commit/bc98ba92c7b8fc75414b79dd8f2f2b962607057c))
* **ci:** bump beta version ([dcd203b](https://github.com/JarodLMN/plugNmeet-client/commit/dcd203b8179604af08de8ae80453aadba9c2d925))
* **ci:** removed rebase again ([5e0e173](https://github.com/JarodLMN/plugNmeet-client/commit/5e0e1730443b80dd5488df0423ed73b6e6aedef1))
* **ci:** To rebase again ([79e1b93](https://github.com/JarodLMN/plugNmeet-client/commit/79e1b935e897b572919ab215693427655b1dca3f))
* crashed when clicked on mic + webcam menu ([5f70cfd](https://github.com/JarodLMN/plugNmeet-client/commit/5f70cfd34ff267f4b62ec8c0e463084fafdc16a1))
* data message was sending to wrong user ([db628e4](https://github.com/JarodLMN/plugNmeet-client/commit/db628e4f837c7473d3b0330b633a178cf53a5f77))
* dependencies upgrade ([2e55ff9](https://github.com/JarodLMN/plugNmeet-client/commit/2e55ff9e9b331e8f8b231b453442076245852f7b))
* deps update ([dd47326](https://github.com/JarodLMN/plugNmeet-client/commit/dd4732611a62b9575b45dcf77a889362a0c3e85f))
* **deps:** bump protocol ([3e9bbfd](https://github.com/JarodLMN/plugNmeet-client/commit/3e9bbfdf9f1030c4550189880ca6dfb60c530de5))
* **deps:** dependencies update ([2922538](https://github.com/JarodLMN/plugNmeet-client/commit/2922538edcfad8a9925600f39d45d540d5df17ec))
* **deps:** dependencies upgrade ([6ce82ba](https://github.com/JarodLMN/plugNmeet-client/commit/6ce82bada17f352fb1c633072fe444924aa98066))
* **deps:** deps update ([ef77b9d](https://github.com/JarodLMN/plugNmeet-client/commit/ef77b9db2e7d993e9dee2594ad42b63a649c29ab))
* **deps:** update dependencies ([0108802](https://github.com/JarodLMN/plugNmeet-client/commit/010880208a473c32844c28b769647bdf236711f1))
* **deps:** update dependencies ([d7f0a5e](https://github.com/JarodLMN/plugNmeet-client/commit/d7f0a5e87048e901b77dede9cbde9d969480f698))
* **deps:** update dependency @bufbuild/protobuf to v1.7.2 ([21cc186](https://github.com/JarodLMN/plugNmeet-client/commit/21cc186aef4115e56cf509c1fc48e1a8f9c81d7e))
* **deps:** update dependency @bufbuild/protobuf to v1.7.2 ([800ea5b](https://github.com/JarodLMN/plugNmeet-client/commit/800ea5bb424b0560042015198de963ee940746f7))
* **deps:** update dependency @bufbuild/protobuf to v1.9.0 ([be89bd6](https://github.com/JarodLMN/plugNmeet-client/commit/be89bd61b9567439e67fc6e93b98381e796dde40))
* **deps:** update dependency @bufbuild/protobuf to v1.9.0 ([ec491da](https://github.com/JarodLMN/plugNmeet-client/commit/ec491da73c998108d38065468d6e2bc82e410ba2))
* **deps:** update dependency @excalidraw/excalidraw to v0.17.3 ([45983a3](https://github.com/JarodLMN/plugNmeet-client/commit/45983a3e414bc08fef41bd77197e421a313138b6))
* **deps:** update dependency @excalidraw/excalidraw to v0.17.3 ([a567faf](https://github.com/JarodLMN/plugNmeet-client/commit/a567faf95dbff0d23458233da1983dd1f3bcb60a))
* **deps:** update dependency @excalidraw/excalidraw to v0.17.5 ([5139337](https://github.com/JarodLMN/plugNmeet-client/commit/5139337a3b2ad6a13887a4e6eb15c5c8d072e70d))
* **deps:** update dependency @excalidraw/excalidraw to v0.17.5 ([225ddbb](https://github.com/JarodLMN/plugNmeet-client/commit/225ddbbdb3bf72571ef3e3df9fea097be8194b6a))
* **deps:** update dependency @excalidraw/excalidraw to v0.17.6 [security] ([212dbf2](https://github.com/JarodLMN/plugNmeet-client/commit/212dbf2eefc638d01014edeab8b6b2fb1fcd36cf))
* **deps:** update dependency @excalidraw/excalidraw to v0.17.6 [security] ([99b2c83](https://github.com/JarodLMN/plugNmeet-client/commit/99b2c8368b5929aa1d5619d80b0b66a61814cb89))
* **deps:** update dependency @nats-io/jetstream to v3.0.0-23 ([6dc546c](https://github.com/JarodLMN/plugNmeet-client/commit/6dc546c564deef1e15ec0b5230446c60b4c83b17))
* **deps:** update dependency @nats-io/jetstream to v3.0.0-23 ([7eb4e92](https://github.com/JarodLMN/plugNmeet-client/commit/7eb4e92d337d44dff7aef6d8b90ef9375672db58))
* **deps:** update dependency @nats-io/jetstream to v3.0.0-27 ([8115983](https://github.com/JarodLMN/plugNmeet-client/commit/81159831434ef9619bd5f045b66c35ac6b8d4a0b))
* **deps:** update dependency @nats-io/jetstream to v3.0.0-27 ([fd8bae6](https://github.com/JarodLMN/plugNmeet-client/commit/fd8bae6dabadbdd74a6fcf955191cbdd537ec3fa))
* **deps:** update dependency @nats-io/nats-core to v3.0.0-35 ([478959a](https://github.com/JarodLMN/plugNmeet-client/commit/478959a0835bd97ba94abd645387786539710700))
* **deps:** update dependency @nats-io/nats-core to v3.0.0-35 ([7af7e11](https://github.com/JarodLMN/plugNmeet-client/commit/7af7e11c4bd498152fca8cc05dac4c0dbf86285f))
* **deps:** update dependency @reduxjs/toolkit to v2.2.2 ([39a845c](https://github.com/JarodLMN/plugNmeet-client/commit/39a845ce952ef0c1b1c7d2d218a58cf09903a850))
* **deps:** update dependency @reduxjs/toolkit to v2.2.2 ([2f56a03](https://github.com/JarodLMN/plugNmeet-client/commit/2f56a0364e0c9a05b32dd490bae65cc6b143af18))
* **deps:** update dependency @reduxjs/toolkit to v2.2.3 ([d1d49de](https://github.com/JarodLMN/plugNmeet-client/commit/d1d49de0cb601466645f28389e5287bb20722048))
* **deps:** update dependency @reduxjs/toolkit to v2.2.3 ([8a780f6](https://github.com/JarodLMN/plugNmeet-client/commit/8a780f6062768efa273cdd9d455961474d3da4d8))
* **deps:** update dependency @reduxjs/toolkit to v2.2.4 ([455121d](https://github.com/JarodLMN/plugNmeet-client/commit/455121d27d0f939354c1fb29320d5674a5f16506))
* **deps:** update dependency @reduxjs/toolkit to v2.2.4 ([04a1f69](https://github.com/JarodLMN/plugNmeet-client/commit/04a1f69f73f79b20d4f27ddaff0220a71e653350))
* **deps:** update dependency @reduxjs/toolkit to v2.2.5 ([67bdb57](https://github.com/JarodLMN/plugNmeet-client/commit/67bdb57262252733137cd06ccde117093bf8ce18))
* **deps:** update dependency @reduxjs/toolkit to v2.2.5 ([9a2019d](https://github.com/JarodLMN/plugNmeet-client/commit/9a2019d3331bc281a90f180d8f6513673ddbafe6))
* **deps:** update dependency @reduxjs/toolkit to v2.2.6 ([0242dcd](https://github.com/JarodLMN/plugNmeet-client/commit/0242dcd49203e3b53b665429ef7c358f1c9d2c83))
* **deps:** update dependency @reduxjs/toolkit to v2.2.6 ([2e08745](https://github.com/JarodLMN/plugNmeet-client/commit/2e08745e6c79c4aef96bed5cfc8da06b7e50b2e5))
* **deps:** update dependency axios to v1.7.2 ([878066f](https://github.com/JarodLMN/plugNmeet-client/commit/878066f9a5d17096925659bc8bacf203f1afa5d8))
* **deps:** update dependency axios to v1.7.2 ([f21b326](https://github.com/JarodLMN/plugNmeet-client/commit/f21b3261779d687c2041d6a1a934367fbb840123))
* **deps:** update dependency axios to v1.7.4 [security] ([8a3afc3](https://github.com/JarodLMN/plugNmeet-client/commit/8a3afc3b42f56a5a495665a6d5c3bafd551db26f))
* **deps:** update dependency axios to v1.7.4 [security] ([ab35040](https://github.com/JarodLMN/plugNmeet-client/commit/ab350401ecb03432a6849e2fe85c1ff7c53b17d0))
* **deps:** update dependency emoji-picker-react to v4.11.1 ([e7f2413](https://github.com/JarodLMN/plugNmeet-client/commit/e7f24139375896dcc148f629ecad0cf43a09d78d))
* **deps:** update dependency emoji-picker-react to v4.11.1 ([ee1c424](https://github.com/JarodLMN/plugNmeet-client/commit/ee1c4240ede78520e60bd5d21ea775e201ea7438))
* **deps:** update dependency emoji-picker-react to v4.8.0 ([86ca5a6](https://github.com/JarodLMN/plugNmeet-client/commit/86ca5a662f4da96445c5ca67c66bf11189d773fc))
* **deps:** update dependency emoji-picker-react to v4.8.0 ([4b8e0a4](https://github.com/JarodLMN/plugNmeet-client/commit/4b8e0a4e5cce2bb4434c690c54528a9155c0de4a))
* **deps:** update dependency emoji-picker-react to v4.9.2 ([1a5ec3a](https://github.com/JarodLMN/plugNmeet-client/commit/1a5ec3a294564fef8f952d060207b47d828e6361))
* **deps:** update dependency emoji-picker-react to v4.9.2 ([fe34f92](https://github.com/JarodLMN/plugNmeet-client/commit/fe34f92ded7db40e74aa89dd50ad0d1a77d8a592))
* **deps:** update dependency emoji-picker-react to v4.9.3 ([cf45d44](https://github.com/JarodLMN/plugNmeet-client/commit/cf45d44986c3a5ea2d48b0beca24ee12de2956df))
* **deps:** update dependency emoji-picker-react to v4.9.3 ([57f1fc5](https://github.com/JarodLMN/plugNmeet-client/commit/57f1fc5d93e054b157c8482562006de3916a8359))
* **deps:** update dependency i18next to v23.11.4 ([a95641e](https://github.com/JarodLMN/plugNmeet-client/commit/a95641e06a1c3f0247bf3b872b37d46dc312151b))
* **deps:** update dependency i18next to v23.11.4 ([c9db33e](https://github.com/JarodLMN/plugNmeet-client/commit/c9db33e4ce6e6d09e3825d542c21d703883df669))
* **deps:** update dependency i18next-browser-languagedetector to v7.2.1 ([0540262](https://github.com/JarodLMN/plugNmeet-client/commit/05402629b5674b96ae799513f1167b492bcc907d))
* **deps:** update dependency i18next-browser-languagedetector to v7.2.1 ([9f59268](https://github.com/JarodLMN/plugNmeet-client/commit/9f592689b8942388384384226e009accb03e89b8))
* **deps:** update dependency i18next-browser-languagedetector to v8 ([a20255b](https://github.com/JarodLMN/plugNmeet-client/commit/a20255baa025428583e8af5895741e486f1aebf6))
* **deps:** update dependency i18next-browser-languagedetector to v8 ([5ba184e](https://github.com/JarodLMN/plugNmeet-client/commit/5ba184ed146676d390597763837de521ef056702))
* **deps:** update dependency i18next-browser-languagedetector to v8.0.2 ([23ecfdd](https://github.com/JarodLMN/plugNmeet-client/commit/23ecfdd9fdd9293267c3fb641297eaf2516a3cf7))
* **deps:** update dependency i18next-browser-languagedetector to v8.0.2 ([955721d](https://github.com/JarodLMN/plugNmeet-client/commit/955721d0e8d83d92d6787b432ca05b2c31796595))
* **deps:** update dependency i18next-http-backend to v2.5.1 ([975987e](https://github.com/JarodLMN/plugNmeet-client/commit/975987ee6f44595ac70c59f719efec20b8419aa3))
* **deps:** update dependency i18next-http-backend to v2.5.1 ([cf627c2](https://github.com/JarodLMN/plugNmeet-client/commit/cf627c28adb30d633cf61c6e46b0186b131b3bd1))
* **deps:** update dependency i18next-http-backend to v2.5.2 ([294bc43](https://github.com/JarodLMN/plugNmeet-client/commit/294bc43f8b86c2f5b797800b52d981369bfc638b))
* **deps:** update dependency i18next-http-backend to v2.5.2 ([be6b161](https://github.com/JarodLMN/plugNmeet-client/commit/be6b161c4f6f9a882ffad1ef1b1adb1b3523c0bf))
* **deps:** update dependency livekit-client to v1.15.12 ([db043c1](https://github.com/JarodLMN/plugNmeet-client/commit/db043c15430d6097181305b794f22d004a90db2f))
* **deps:** update dependency livekit-client to v1.15.12 ([77063dd](https://github.com/JarodLMN/plugNmeet-client/commit/77063dd3fe146488433f87125683b0f802f4aa49))
* **deps:** update dependency livekit-client to v2.0.10 ([c1dbc04](https://github.com/JarodLMN/plugNmeet-client/commit/c1dbc04514f63f0805dd034f3638971089498c16))
* **deps:** update dependency livekit-client to v2.0.10 ([85825ff](https://github.com/JarodLMN/plugNmeet-client/commit/85825ffca181dbda310659c94bdc0017ee8e0be3))
* **deps:** update dependency livekit-client to v2.1.3 ([44bf857](https://github.com/JarodLMN/plugNmeet-client/commit/44bf857e4e37fff4ee3876a8e343b2256b58f765))
* **deps:** update dependency livekit-client to v2.1.3 ([92739cb](https://github.com/JarodLMN/plugNmeet-client/commit/92739cbcae432d3fcf7beca93a822d30d86bfac6))
* **deps:** update dependency livekit-client to v2.1.5 ([d5cc135](https://github.com/JarodLMN/plugNmeet-client/commit/d5cc135ddebaa28e7c6ba1cda23cb850277dcfdd))
* **deps:** update dependency livekit-client to v2.1.5 ([5ad9d82](https://github.com/JarodLMN/plugNmeet-client/commit/5ad9d82254f85ba20b8cd2abbb5ebfcbf2e27522))
* **deps:** update dependency livekit-client to v2.3.2 ([a5f1acd](https://github.com/JarodLMN/plugNmeet-client/commit/a5f1acd2a67d2fc90785ea59354c72df164aa23a))
* **deps:** update dependency livekit-client to v2.3.2 ([b28f8e0](https://github.com/JarodLMN/plugNmeet-client/commit/b28f8e02b451a12236d28e8d91a106a82d035af4))
* **deps:** update dependency livekit-client to v2.5.7 ([a520185](https://github.com/JarodLMN/plugNmeet-client/commit/a5201851962434d4b27117aea59cb782781eec76))
* **deps:** update dependency livekit-client to v2.5.7 ([2682864](https://github.com/JarodLMN/plugNmeet-client/commit/268286443dfe1e101dabd300d2007efa134c7a24))
* **deps:** update dependency plugnmeet-protocol-js to v1.0.7-rc.11 ([a865ebc](https://github.com/JarodLMN/plugNmeet-client/commit/a865ebca91b1e1e1fb232a15fb959af96c6f3c2c))
* **deps:** update dependency plugnmeet-protocol-js to v1.0.7-rc.11 ([7ee4999](https://github.com/JarodLMN/plugNmeet-client/commit/7ee4999bb6418a142a81bde4cf0b14c832111c9b))
* **deps:** update dependency plugnmeet-protocol-js to v1.0.8 ([9d6f6d5](https://github.com/JarodLMN/plugNmeet-client/commit/9d6f6d51797d324eb189904d56452f095ff2c148))
* **deps:** update dependency plugnmeet-protocol-js to v1.0.8 ([d8d170c](https://github.com/JarodLMN/plugNmeet-client/commit/d8d170c640a1c057e21b5cc59a5974f2b4649891))
* **deps:** update dependency react-i18next to v14.1.1 ([72bf67a](https://github.com/JarodLMN/plugNmeet-client/commit/72bf67af4d981a0c3b7c340bfb3a076e74d47fa3))
* **deps:** update dependency react-i18next to v14.1.1 ([5858cb5](https://github.com/JarodLMN/plugNmeet-client/commit/5858cb5b6bf197635cc846da1aca860ada94b61b))
* **deps:** update dependency react-redux to v9.1.1 ([f305827](https://github.com/JarodLMN/plugNmeet-client/commit/f305827bf141b558792b773285c23e9e5f71ac18))
* **deps:** update dependency react-redux to v9.1.1 ([8a62f53](https://github.com/JarodLMN/plugNmeet-client/commit/8a62f53d34d3195b39e5e7c8f85e1435d9f3a873))
* **deps:** update dependency sanitize-html to v2.13.0 ([da6461d](https://github.com/JarodLMN/plugNmeet-client/commit/da6461daa302a25ea2221f721abcfdffd3a6bdd4))
* **deps:** update dependency sanitize-html to v2.13.0 ([43406e6](https://github.com/JarodLMN/plugNmeet-client/commit/43406e63f2f9638a27c615574bd420b78e166d04))
* **deps:** update dependency validator to v13.12.0 ([1acc661](https://github.com/JarodLMN/plugNmeet-client/commit/1acc661f1464b44fadc7310d75aeac2dd0b6e02e))
* **deps:** update dependency validator to v13.12.0 ([20a8c3f](https://github.com/JarodLMN/plugNmeet-client/commit/20a8c3fe5a26eb0e27d0e965fd7ca4d2b1a8ce86))
* **deps:** update dependency video.js to v8.12.0 ([734030a](https://github.com/JarodLMN/plugNmeet-client/commit/734030a9c41ca743a4c16c8664d54e481caff68c))
* **deps:** update dependency video.js to v8.12.0 ([4d2b761](https://github.com/JarodLMN/plugNmeet-client/commit/4d2b761f8a84c57914280d4ef45b2046a5cd6f25))
* **deps:** update dependency video.js to v8.16.1 ([338fe55](https://github.com/JarodLMN/plugNmeet-client/commit/338fe55d5f5519d36553a12e99cca019a57771ca))
* **deps:** update dependency video.js to v8.16.1 ([b1a9e6d](https://github.com/JarodLMN/plugNmeet-client/commit/b1a9e6da6fcae29f4323fd39c988ad6e7a46c89b))
* **feat:** use `Notification` API to notify when the current tab is not visible. ([62b8e43](https://github.com/JarodLMN/plugNmeet-client/commit/62b8e436525a61f58e85db639aeb7a19ac27c750))
* few bugs regarding user's media + list ([8eb4369](https://github.com/JarodLMN/plugNmeet-client/commit/8eb4369f308350b03c123af3542c253f0667d740))
* if `allow_view_other_users_list` false, then other users' public message should not be visible. ([1ed72cc](https://github.com/JarodLMN/plugNmeet-client/commit/1ed72cc1330e19115b8e711678ab4c0883802c88))
* **locale:** added `한국어` ([b472966](https://github.com/JarodLMN/plugNmeet-client/commit/b472966d232fb548a679c09335d602a0fb679ff6))
* missed to add languages ([1ffce62](https://github.com/JarodLMN/plugNmeet-client/commit/1ffce626486b0752f7a3dfeb640a89e6e5a27f65))
* multiuser whiteboard sync problem ([f5ae9e5](https://github.com/JarodLMN/plugNmeet-client/commit/f5ae9e5de77e4d9a62d5aff2f33d3f5a22abc0e2))
* multiuser whiteboard sync problem ([9393759](https://github.com/JarodLMN/plugNmeet-client/commit/939375918391c0ad27c886d42f9c132f93bf1ac8))
* new Crowdin updates ([9d16460](https://github.com/JarodLMN/plugNmeet-client/commit/9d16460c84c8ff0748742daf3a94f80e30714501))
* new Crowdin updates ([e75c162](https://github.com/JarodLMN/plugNmeet-client/commit/e75c162ae7f17ca33c75139654eb7e659b593488))
* new Crowdin updates ([#783](https://github.com/JarodLMN/plugNmeet-client/issues/783)) ([d80df3e](https://github.com/JarodLMN/plugNmeet-client/commit/d80df3e7df427ccfcb108d9b2a9e9d84d3c6c0ed))
* new Crowdin updates ([#853](https://github.com/JarodLMN/plugNmeet-client/issues/853)) ([1702fd6](https://github.com/JarodLMN/plugNmeet-client/commit/1702fd6bcd8fe9ab69d5cc164bdfb0c67b1a6c55))
* poll result was not updating ([c94cae1](https://github.com/JarodLMN/plugNmeet-client/commit/c94cae11bdfafc960ed5def7f1f79a539e8b2209))
* recorder logic ([d6331b1](https://github.com/JarodLMN/plugNmeet-client/commit/d6331b17943f89678b6421d1883ef90f6776a904))
* release-please-action ([2f58b73](https://github.com/JarodLMN/plugNmeet-client/commit/2f58b73483eafea72ac9edaf50e16372ac0158cb))
* set default value for ref ([9019f35](https://github.com/JarodLMN/plugNmeet-client/commit/9019f35a05ac9f0b9459eb073db629732bb46d7f))
* should not ask notification permission for recorder ([b33f6c2](https://github.com/JarodLMN/plugNmeet-client/commit/b33f6c2dc104e4f000eefc9cf976fae7f89d381d))
* showing invalid poll result ([6ca9018](https://github.com/JarodLMN/plugNmeet-client/commit/6ca901824fc4dbbcf1990440b1d6967730dec50a))
* typo ([b8103ce](https://github.com/JarodLMN/plugNmeet-client/commit/b8103cef8b67d780f2002be900e14712256eeda7))
* typo ([96cbcc3](https://github.com/JarodLMN/plugNmeet-client/commit/96cbcc3d7228ca9b71a3ae004409650b4adf0f23))
* upload error ([ce262e0](https://github.com/JarodLMN/plugNmeet-client/commit/ce262e02f01a491bd399f4b988243bfed7cb0229))
* whiteboard data was not pulled if closed ([247defc](https://github.com/JarodLMN/plugNmeet-client/commit/247defcad1f71eaa018df7b56604752b06f0ab30))

## [1.7.0](https://github.com/mynaparrot/plugNmeet-client/compare/v1.6.10...v1.7.0) (2025-02-04)


### Features

* the ability to adjust the webcam's positioning according to the active speaker ([c6742cb](https://github.com/mynaparrot/plugNmeet-client/commit/c6742cbd5a372fca685f95dc2731fe9c273091a9))


### Bug Fixes

* **ci:** added beta release ([bc98ba9](https://github.com/mynaparrot/plugNmeet-client/commit/bc98ba92c7b8fc75414b79dd8f2f2b962607057c))
* **ci:** bump beta version ([dcd203b](https://github.com/mynaparrot/plugNmeet-client/commit/dcd203b8179604af08de8ae80453aadba9c2d925))
* **ci:** removed rebase again ([5e0e173](https://github.com/mynaparrot/plugNmeet-client/commit/5e0e1730443b80dd5488df0423ed73b6e6aedef1))
* **ci:** To rebase again ([79e1b93](https://github.com/mynaparrot/plugNmeet-client/commit/79e1b935e897b572919ab215693427655b1dca3f))
* dependencies upgrade ([2e55ff9](https://github.com/mynaparrot/plugNmeet-client/commit/2e55ff9e9b331e8f8b231b453442076245852f7b))
* deps update ([dd47326](https://github.com/mynaparrot/plugNmeet-client/commit/dd4732611a62b9575b45dcf77a889362a0c3e85f))
* **deps:** update dependency plugnmeet-protocol-js to v1.0.8 ([d8d170c](https://github.com/mynaparrot/plugNmeet-client/commit/d8d170c640a1c057e21b5cc59a5974f2b4649891))
* new Crowdin updates ([#853](https://github.com/mynaparrot/plugNmeet-client/issues/853)) ([1702fd6](https://github.com/mynaparrot/plugNmeet-client/commit/1702fd6bcd8fe9ab69d5cc164bdfb0c67b1a6c55))
* should not ask notification permission for recorder ([b33f6c2](https://github.com/mynaparrot/plugNmeet-client/commit/b33f6c2dc104e4f000eefc9cf976fae7f89d381d))

## [1.6.10](https://github.com/mynaparrot/plugNmeet-client/compare/v1.6.9...v1.6.10) (2024-12-20)


### Bug Fixes

* **bug:** Ingress was not working in the new Nats solution. Ref: https://github.com/mynaparrot/plugNmeet-server/discussions/611 ([f3b8374](https://github.com/mynaparrot/plugNmeet-client/commit/f3b8374721e082f36ddd8f73c2636e14b7553079))
* data message was sending to wrong user ([db628e4](https://github.com/mynaparrot/plugNmeet-client/commit/db628e4f837c7473d3b0330b633a178cf53a5f77))
* **deps:** dependencies upgrade ([6ce82ba](https://github.com/mynaparrot/plugNmeet-client/commit/6ce82bada17f352fb1c633072fe444924aa98066))
* **deps:** deps update ([ef77b9d](https://github.com/mynaparrot/plugNmeet-client/commit/ef77b9db2e7d993e9dee2594ad42b63a649c29ab))
* **deps:** update dependency i18next-browser-languagedetector to v8.0.2 ([955721d](https://github.com/mynaparrot/plugNmeet-client/commit/955721d0e8d83d92d6787b432ca05b2c31796595))
* **deps:** update dependency plugnmeet-protocol-js to v1.0.7-rc.11 ([7ee4999](https://github.com/mynaparrot/plugNmeet-client/commit/7ee4999bb6418a142a81bde4cf0b14c832111c9b))
* **feat:** use `Notification` API to notify when the current tab is not visible. ([62b8e43](https://github.com/mynaparrot/plugNmeet-client/commit/62b8e436525a61f58e85db639aeb7a19ac27c750))

## [1.6.9](https://github.com/mynaparrot/plugNmeet-client/compare/v1.6.8...v1.6.9) (2024-12-07)


### Bug Fixes

* **deps:** bump protocol ([3e9bbfd](https://github.com/mynaparrot/plugNmeet-client/commit/3e9bbfdf9f1030c4550189880ca6dfb60c530de5))
* **deps:** update dependencies ([0108802](https://github.com/mynaparrot/plugNmeet-client/commit/010880208a473c32844c28b769647bdf236711f1))
* set default value for ref ([9019f35](https://github.com/mynaparrot/plugNmeet-client/commit/9019f35a05ac9f0b9459eb073db629732bb46d7f))

## [1.6.8](https://github.com/mynaparrot/plugNmeet-client/compare/v1.6.7...v1.6.8) (2024-11-25)


### Bug Fixes

* **deps:** dependencies update ([2922538](https://github.com/mynaparrot/plugNmeet-client/commit/2922538edcfad8a9925600f39d45d540d5df17ec))
* **deps:** update dependencies ([d7f0a5e](https://github.com/mynaparrot/plugNmeet-client/commit/d7f0a5e87048e901b77dede9cbde9d969480f698))
* **deps:** update dependency @nats-io/jetstream to v3.0.0-23 ([7eb4e92](https://github.com/mynaparrot/plugNmeet-client/commit/7eb4e92d337d44dff7aef6d8b90ef9375672db58))
* **deps:** update dependency @nats-io/jetstream to v3.0.0-27 ([fd8bae6](https://github.com/mynaparrot/plugNmeet-client/commit/fd8bae6dabadbdd74a6fcf955191cbdd537ec3fa))
* **deps:** update dependency @nats-io/nats-core to v3.0.0-35 ([7af7e11](https://github.com/mynaparrot/plugNmeet-client/commit/7af7e11c4bd498152fca8cc05dac4c0dbf86285f))
* **locale:** added `한국어` ([b472966](https://github.com/mynaparrot/plugNmeet-client/commit/b472966d232fb548a679c09335d602a0fb679ff6))

## [1.6.7](https://github.com/mynaparrot/plugNmeet-client/compare/v1.6.6...v1.6.7) (2024-11-04)


### Bug Fixes

* missed to add languages ([1ffce62](https://github.com/mynaparrot/plugNmeet-client/commit/1ffce626486b0752f7a3dfeb640a89e6e5a27f65))
* typo ([b8103ce](https://github.com/mynaparrot/plugNmeet-client/commit/b8103cef8b67d780f2002be900e14712256eeda7))
* typo ([96cbcc3](https://github.com/mynaparrot/plugNmeet-client/commit/96cbcc3d7228ca9b71a3ae004409650b4adf0f23))

## [1.6.6](https://github.com/mynaparrot/plugNmeet-client/compare/v1.6.5...v1.6.6) (2024-11-03)


### Bug Fixes

* upload error ([ce262e0](https://github.com/mynaparrot/plugNmeet-client/commit/ce262e02f01a491bd399f4b988243bfed7cb0229))

## [1.6.5](https://github.com/mynaparrot/plugNmeet-client/compare/v1.6.4...v1.6.5) (2024-11-03)


### Bug Fixes

* new Crowdin updates ([#783](https://github.com/mynaparrot/plugNmeet-client/issues/783)) ([d80df3e](https://github.com/mynaparrot/plugNmeet-client/commit/d80df3e7df427ccfcb108d9b2a9e9d84d3c6c0ed))
* release-please-action ([2f58b73](https://github.com/mynaparrot/plugNmeet-client/commit/2f58b73483eafea72ac9edaf50e16372ac0158cb))
