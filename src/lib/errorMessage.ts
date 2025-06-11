interface ApiError extends Error {
    response?: {
        data: {
            detail: string;
            email: string;
        };
    };
}

export default function errorMessage (error: ApiError) {
    return error.response?.data.detail ?? error.response?.data.email ?? error.message;
}