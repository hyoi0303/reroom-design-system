import { Button, Input, Card, Badge, Typography } from '../components';
import './DesignSystemPage.css';

export default function DesignSystemPage() {
  return (
    <div className="ds-page">
      <header className="ds-page__header">
        <Typography variant="h1">reroom Design System</Typography>
        <Typography variant="body1" color="secondary">
          컴포넌트 라이브러리 및 디자인 토큰 데모
        </Typography>
      </header>

      {/* Color Tokens */}
      <Section title="Colors">
        <div className="ds-subsection">
          <Typography variant="subtitle2">Primary</Typography>
          <div className="ds-color-grid">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => (
              <div key={n} className="ds-color-swatch">
                <div
                  className="ds-color-swatch__box"
                  style={{ backgroundColor: `var(--color-primary-${n})` }}
                />
                <span className="ds-color-swatch__label">{n}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ds-subsection">
          <Typography variant="subtitle2">Gray</Typography>
          <div className="ds-color-grid">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => (
              <div key={n} className="ds-color-swatch">
                <div
                  className="ds-color-swatch__box"
                  style={{ backgroundColor: `var(--color-gray-${n})` }}
                />
                <span className="ds-color-swatch__label">{n}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ds-subsection">
          <Typography variant="subtitle2">Semantic</Typography>
          <div className="ds-color-grid">
            {['success', 'warning', 'error', 'info'].map((c) => (
              <div key={c} className="ds-color-swatch">
                <div
                  className="ds-color-swatch__box"
                  style={{ backgroundColor: `var(--color-${c})` }}
                />
                <span className="ds-color-swatch__label">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Typography */}
      <Section title="Typography">
        <div className="ds-stack">
          <Typography variant="h1">Heading 1 - 제목</Typography>
          <Typography variant="h2">Heading 2 - 부제목</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="subtitle1">Subtitle 1 - 서브타이틀</Typography>
          <Typography variant="subtitle2">Subtitle 2</Typography>
          <Typography variant="body1">Body 1 - 본문 텍스트입니다. 기본 텍스트 스타일로 사용됩니다.</Typography>
          <Typography variant="body2">Body 2 - 작은 본문 텍스트입니다.</Typography>
          <Typography variant="caption">Caption - 캡션 텍스트</Typography>
          <Typography variant="overline">Overline - 오버라인</Typography>
        </div>
      </Section>

      {/* Buttons */}
      <Section title="Button">
        <div className="ds-subsection">
          <Typography variant="subtitle2">Variants</Typography>
          <div className="ds-row">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </div>
        <div className="ds-subsection">
          <Typography variant="subtitle2">Sizes</Typography>
          <div className="ds-row">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
        <div className="ds-subsection">
          <Typography variant="subtitle2">States</Typography>
          <div className="ds-row">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>
        <div className="ds-subsection">
          <Typography variant="subtitle2">Full Width</Typography>
          <Button fullWidth>Full Width Button</Button>
        </div>
      </Section>

      {/* Input */}
      <Section title="Input">
        <div className="ds-input-grid">
          <Input label="기본 입력" placeholder="텍스트를 입력하세요" />
          <Input label="도움말 텍스트" placeholder="이메일 주소" helperText="예: user@example.com" />
          <Input label="에러 상태" placeholder="비밀번호" error="비밀번호는 8자 이상이어야 합니다" />
          <Input label="비활성화" placeholder="비활성화" disabled />
        </div>
        <div className="ds-subsection">
          <Typography variant="subtitle2">Sizes</Typography>
          <div className="ds-input-grid">
            <Input size="sm" placeholder="Small" />
            <Input size="md" placeholder="Medium" />
            <Input size="lg" placeholder="Large" />
          </div>
        </div>
      </Section>

      {/* Card */}
      <Section title="Card">
        <div className="ds-card-grid">
          <Card variant="elevated">
            <Card.Header>
              <Typography variant="subtitle1">Elevated Card</Typography>
              <Badge variant="primary">New</Badge>
            </Card.Header>
            <Card.Body>
              <Typography variant="body2">
                그림자가 있는 기본 카드 스타일입니다. 콘텐츠를 감싸는 컨테이너로 사용됩니다.
              </Typography>
            </Card.Body>
            <Card.Footer>
              <Button size="sm" variant="primary">확인</Button>
              <Button size="sm" variant="ghost">취소</Button>
            </Card.Footer>
          </Card>

          <Card variant="outlined">
            <Card.Header>
              <Typography variant="subtitle1">Outlined Card</Typography>
            </Card.Header>
            <Card.Body>
              <Typography variant="body2">
                테두리가 있는 카드 스타일입니다. 깔끔한 구분이 필요할 때 사용합니다.
              </Typography>
            </Card.Body>
          </Card>

          <Card variant="filled">
            <Card.Header>
              <Typography variant="subtitle1">Filled Card</Typography>
            </Card.Header>
            <Card.Body>
              <Typography variant="body2">
                배경색이 채워진 카드입니다. 섹션 구분에 적합합니다.
              </Typography>
            </Card.Body>
          </Card>
        </div>
      </Section>

      {/* Badge */}
      <Section title="Badge">
        <div className="ds-row">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
        <div className="ds-subsection">
          <Typography variant="subtitle2">Sizes</Typography>
          <div className="ds-row">
            <Badge size="sm" variant="primary">Small</Badge>
            <Badge size="md" variant="primary">Medium</Badge>
            <Badge size="lg" variant="primary">Large</Badge>
          </div>
        </div>
      </Section>

      {/* Spacing */}
      <Section title="Spacing">
        <div className="ds-spacing-list">
          {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16].map((n) => (
            <div key={n} className="ds-spacing-item">
              <span className="ds-spacing-item__label">--spacing-{n}</span>
              <div
                className="ds-spacing-item__bar"
                style={{ width: `var(--spacing-${n})` }}
              />
              <span className="ds-spacing-item__value">
                {n * 4}px
              </span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="ds-section">
      <Typography variant="h3" className="ds-section__title">
        {title}
      </Typography>
      {children}
    </section>
  );
}
