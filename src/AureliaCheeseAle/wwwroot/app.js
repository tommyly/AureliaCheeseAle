export class App {

    configureRouter(config, router) {

        config.map([
          { route: ['', 'home'],  moduleId: 'home', nav: true, title: 'Home' }
        ]);

        this.router = router;
    }
}