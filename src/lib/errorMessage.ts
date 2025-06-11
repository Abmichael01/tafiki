interface ApiError extends Error {
    response?: {
        data: {
            detail: string;
        };
    };
}

export default function errorMessage (error: ApiError) {
    return error.response?.data.detail ?? error.message;
}