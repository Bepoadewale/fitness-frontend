import AWS from 'aws-sdk';

const polly = new AWS.Polly({
  region: 'us-east-1',
});

export const synthesizeSpeech = async (text) => {
  const params = {
    Text: text,
    OutputFormat: 'mp3',
    VoiceId: 'Joanna',
  };

  try {
    const data = await polly.synthesizeSpeech(params).promise();
    // You can save the audio data or play it directly in the app
    console.log('Speech synthesized:', data);
  } catch (error) {
    console.log('Error synthesizing speech:', error);
  }
};