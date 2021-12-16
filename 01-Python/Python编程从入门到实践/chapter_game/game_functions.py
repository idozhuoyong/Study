import sys
import pygame
from bullet import Bullet

def check_keydown_events(event, ai_settings, screen, ship, bullets):
    """ 响应按键 """
    if event.key == pygame.K_RIGHT:
        # 向右移动
        ship.moving_right = True
    elif event.key == pygame.K_LEFT:
        # 向左移动
        ship.moving_left = True
    elif event.key == pygame.K_UP:
        # 向上移动
        ship.moving_up = True
    elif event.key == pygame.K_DOWN:
        # 向下移动
        ship.moving_down = True
    elif event.key == pygame.K_SPACE:
        # 创建一个子弹，并将其加入到编组bullets中
        new_bullet = Bullet(ai_settings, screen, ship)
        bullets.add(new_bullet)
        pass

def check_keyup_events(event, ship):
    """ 响应松开 """
    if event.key == pygame.K_RIGHT:
        # 结束向右移动
        ship.moving_right = False
    elif event.key == pygame.K_LEFT:
        # 结束向左移动
        ship.moving_left = False
    elif event.key == pygame.K_UP:
        # 结束向上移动
        ship.moving_up = False
    elif event.key == pygame.K_DOWN:
        # 结束向下移动
        ship.moving_down = False

def check_events(ai_settings, screen, ship, bullets):
    """ 响应按键和鼠标时间 """
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()
        elif event.type == pygame.KEYDOWN:
            check_keydown_events(event, ai_settings, screen, ship, bullets)
        elif event.type == pygame.KEYUP:
            check_keyup_events(event, ship)
    
def update_screen(ai_settings, screen, ship, bullets):
    """ 更新屏幕上的图像，并切换到新图像 """
    # 重新绘制屏幕
    screen.fill(ai_settings.bg_color) # 填充背景颜色
    # 重绘所有子弹
    for bullet in bullets.sprites():
        bullet.draw_bullet()
    # 绘制飞船
    ship.blitme()

    # 让最近绘制的屏幕可见
    pygame.display.flip()