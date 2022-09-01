import DependenciesPusher from './lib/AddDependencies';

const app = new DependenciesPusher();

app
  .addDependencies()
  .then(app.saveToPackage)
  .catch((error: unknown) => {
    console.error('\x1b[31m%s\x1b[0m', error);
    process.exit(1);
  });
