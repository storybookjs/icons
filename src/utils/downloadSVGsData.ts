import axios from 'axios';

/**
 * Download SVG data from given array of objects containing url
 */
export const downloadSVGsData = async <T extends object>(
  data: ({ url: string } & T)[]
) => {
  return Promise.all(
    data.map(async (dataItem) => {
      const downloadedSvg = await axios.get<string>(dataItem.url);
      return {
        ...dataItem,
        data: downloadedSvg.data,
      };
    })
  );
};
