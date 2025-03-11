import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    return new ImageResponse(
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            padding: '40px 50px',
          },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '20px',
                  backgroundColor: '#4CAF50'
                }
              }
            },
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '80px'
                },
                children: [
                  {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#F5F5DC',
                        borderRadius: '12px',
                        marginRight: '20px'
                      },
                      children: [
                        {
                          type: 'div',
                          props: {
                            style: { fontSize: '40px' },
                            children: '🌱'
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: 'div',
                    props: {
                      style: { fontSize: '48px', fontWeight: 'bold' },
                      children: 'Native AI'
                    }
                  }
                ]
              }
            },
            {
              type: 'div',
              props: {
                style: {
                  fontSize: '60px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: '80px',
                },
                children: 'Become an AI-First Company'
              }
            },
            {
              type: 'div',
              props: {
                style: {
                  fontSize: '32px',
                  color: '#555',
                  textAlign: 'center',
                  marginTop: '30px',
                },
                children: 'Launch AI-native apps and human-centered'
              }
            },
            {
              type: 'div',
              props: {
                style: {
                  fontSize: '32px',
                  color: '#555',
                  textAlign: 'center',
                  marginTop: '10px',
                },
                children: 'conversational experiences'
              }
            },
            {
              type: 'div',
              props: {
                style: {
                  fontSize: '28px',
                  color: '#777',
                  textAlign: 'center',
                  marginTop: 'auto',
                  marginBottom: '40px',
                },
                children: 'www.buildnative.ai'
              }
            }
          ]
        }
      },
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return new Response('Failed to generate OG image', { status: 500 });
  }
}