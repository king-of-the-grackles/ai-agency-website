import { NextResponse } from 'next/server';
import { ImageResponse } from 'next/og';

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            padding: '40px 50px',
          }}
        >
          {/* Green bar at top */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '20px',
            backgroundColor: '#4CAF50'
          }} />
          
          {/* Logo and name */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '80px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              backgroundColor: '#F5F5DC',
              borderRadius: '12px',
              marginRight: '20px'
            }}>
              <div style={{ fontSize: '40px' }}>🌱</div>
            </div>
            <div style={{ fontSize: '48px', fontWeight: 'bold' }}>Native AI</div>
          </div>
          
          {/* Main headline */}
          <div style={{
            fontSize: '60px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: '80px',
          }}>
            Become an AI-First Company
          </div>
          
          {/* Subheadline */}
          <div style={{
            fontSize: '32px',
            color: '#555',
            textAlign: 'center',
            marginTop: '30px',
          }}>
            Launch AI-native apps and human-centered
          </div>
          <div style={{
            fontSize: '32px',
            color: '#555',
            textAlign: 'center',
            marginTop: '10px',
          }}>
            conversational experiences
          </div>
          
          {/* URL */}
          <div style={{
            fontSize: '28px',
            color: '#777',
            textAlign: 'center',
            marginTop: 'auto',
            marginBottom: '40px',
          }}>
            www.buildnative.ai
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';