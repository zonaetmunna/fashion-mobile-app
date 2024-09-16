import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { tagTypesList } from '../tag-types';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://nextjs-ecommerce-backend.vercel.app/api/v1',
		// baseUrl: "http://localhost:5004/api/v1",
	}),
	endpoints: () => ({}),
	tagTypes: tagTypesList,
});
