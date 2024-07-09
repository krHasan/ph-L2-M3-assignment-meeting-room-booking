import { TErrorSources, TGenericErrorResponse } from "../interface/error";

const handleDuplicateError = (error: any): TGenericErrorResponse => {
    const statusCode = 400;

    // Extract value within double quotes using regex
    const match = error.message.match(/"([^"]*)"/);

    // The extracted value will be in the first capturing group
    const extractedMessage = match && match[1];

    const errorSources: TErrorSources = [
        {
            path: error.keyValue,
            message: `${extractedMessage} is already exists`,
        },
    ];

    return {
        statusCode,
        message: "Duplicate Error",
        errorSources,
    };
};

export default handleDuplicateError;
