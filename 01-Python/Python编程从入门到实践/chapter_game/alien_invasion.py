import sys
import pygame

def run_game():
    # 初始化
    pygame.init()
    screen = pygame.display.set_mode((1200, 800)) # 创建窗口
    pygame.display.set_caption("Alien Invasion") # 设置说明

    screen.fill((245, 245, 245)) # 填充背景颜色

    while True:
        # 监听键盘和鼠标
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                sys.exit()
        
        # 让最近绘制的屏幕可见
        pygame.display.flip()

run_game()