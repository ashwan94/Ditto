package kr.or.nextit.ditto.podcast;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PodcastVO {
    private int podcastNo;
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss.sss")
    private LocalDateTime createDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss.sss")
    private LocalDateTime modifyDate;
    private String status;
    private long hits;
    private int totalStreamingTime;
}
