const parseArgs = () => {
    const envArgs = Object.keys(process.env);
    const filteredEnvArgs = envArgs.filter(item => item.startsWith("RSS_"));
    const stringifiesEnvVars = filteredEnvArgs.map(item => `${process.env[item]}`).join("; ");
    console.log(stringifiesEnvVars);
};

parseArgs();