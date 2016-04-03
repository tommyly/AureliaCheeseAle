export class App {

    configureRouter(config, router) {

        config.map([
          { route: ['', 'list'],  moduleId: 'list', nav: true, title: 'List' },
          { route: 'create',  moduleId: 'create', nav: true, title: 'Create' }
        ]);

        this.router = router;
    }
}